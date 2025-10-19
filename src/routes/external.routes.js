// src/routes/external.routes.js
const express = require("express");
const axios = require("axios");
const router = express.Router();

function pickPokemonFields(p) {
  return {
    id: p.id,
    name: p.name,
    height: p.height,
    weight: p.weight,
    types: p.types?.map(t => t.type?.name) ?? [],
    abilities: p.abilities?.map(a => a.ability?.name) ?? [],
    base_stats: p.stats?.map(s => ({ stat: s.stat?.name, base: s.base_stat })) ?? [],
    sprite:
      p.sprites?.other?.["official-artwork"]?.front_default ||
      p.sprites?.front_default ||
      null,
  };
}

router.get("/pokemon/:name", async (req, res) => {
  const name = String(req.params.name ?? "")
    .trim()
    .toLowerCase();

  if (!name) {
    return res.status(400).json({ error: "name param is required" });
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(name)}`;
  console.log("[pokemon] fetching:", url);

  try {
    const { data } = await axios.get(url, { timeout: 10_000 });
    return res.status(200).json(pickPokemonFields(data));
  } catch (err) {
    // Axios error handling with clean mapping
    if (axios.isAxiosError(err)) {
      const status = err.response?.status ?? 500;

      if (status === 404) {
        return res.status(404).json({ error: `Pokémon "${name}" not found` });
      }
      // Optional: include upstream message in dev logs
      console.error("[pokemon] upstream error:", status, err.response?.data || err.message);

      return res.status(status).json({
        error: "Upstream request failed",
        status,
      });
    }

    console.error("[pokemon] unexpected error:", err);
    return res.status(500).json({ error: "Unexpected server error" });
  }
});

module.exports = router;

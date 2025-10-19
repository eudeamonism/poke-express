const express = require("express");
const path = require("path");

const app = express();

// Serve /public at site root (i.e., "/" maps to public/)
const publicDir = path.join(__dirname, "../public");
app.use(express.static(publicDir));

// Single landing page
app.get("/", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

// Mount API (must return JSON, not HTML)
app.use("/api/external", require("./routes/external.routes"));

module.exports = app;

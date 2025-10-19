// Global helper available to inline scripts
async function fetchJSON(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) {
    // try to show useful error text (even if server sent HTML)
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
  }
  return res.json();
}

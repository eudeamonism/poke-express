// Basic helper to make string comparisons consistent
function normalizer(value) {
  //Check for nullish values
  if (value == null) return null;

  if (typeof value === "boolean") return value;

  if (typeof value === "number") return Number.isFinite(value) ? value : null;

  if (typeof value === "string") {
    const s = value.trim();
    //empty values become null
    if (s.length === 0) return null;

    //verify if Number
    const n = Number(s);
    if (Number.isFinite(n)) return n;

    //return lowercased string
    return s.toLowerCase();
  }

  //for other types, return null
  return null;
}

function getByPath(obj, path) {
  return path
    .split('.')                       // turn "address.geo.lat" into ["address","geo","lat"]
    .reduce((current, key) => (
      current ? current[key] : undefined
    ), obj);
}


module.exports = { normalizer, getByPath };
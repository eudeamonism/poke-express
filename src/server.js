// src/server.js
const app = require("./app"); // your existing Express app (module.exports = app)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

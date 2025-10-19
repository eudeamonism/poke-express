
# 🧩 Poke-Express  

A simple Node.js + Express application that fetches Pokémon data from the [PokeAPI](https://pokeapi.co/) and serves both an API and a minimal frontend UI.  

## **🌐 Live Demo:** [https://poke-mini.onrender.com/](https://poke-mini.onrender.com/)

## 📘 Project Overview  

This project was built as a foundational exercise to learn how to:  

- Build and serve RESTful APIs with **Express.js**  
- Consume external APIs using **Axios**  
- Structure backend routes and serve static assets  
- Deploy a full Node.js service to **Render**

The project fetches Pokémon data (like Charizard, Mew, etc.) and renders it both as JSON (for API use) and as a simple styled web page.

---

## 🗂️ Folder Structure  

## 🗂️ Folder Structure

```text
poke-express/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── index.html
│
├── src/
│   ├── routes/
│   │   ├── external.routes.js
│   │   └── users.routes.js
│   ├── utils/
│   │   └── async.js
│   ├── app.js
│   └── server.js
│
├── .gitignore
├── package.json
├── render.yaml
└── README.md
```

## ⚙️ Installation & Setup  

### 1️⃣ Clone the repository  

```bash
git clone https://github.com/eudeamonism/poke-express.git
cd poke-express
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run locally

**Development mode (auto-reload):**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

Then visit:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deployment (Render)

Render automatically reads the `render.yaml` file:

```yaml
services:
  - type: web
    name: poke-mini
    env: node
    plan: free
    buildCommand: npm install
    startCommand: npm start
```

### Deploy Steps

1. Push your code to **GitHub**
2. Log into [Render](https://render.com)
3. Create a **Blueprint Deployment**
4. Link your repo and branch (`main`)
5. Click **Deploy Blueprint**

Render builds and hosts the app automatically.
🟢 Live: [https://poke-mini.onrender.com/](https://poke-mini.onrender.com/)

---

## 🧾 Example API Endpoints

| Route                             | Description                   | Example                                                                                                                        |
| --------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `/`                               | Base route — returns homepage | [https://poke-mini.onrender.com/](https://poke-mini.onrender.com/)                                                             |
| `/api/external/`                  | Confirms API is active        | [https://poke-mini.onrender.com/api/external/](https://poke-mini.onrender.com/api/external/)                                   |
| `/api/external/pokemon/charizard` | Fetches live Pokémon data     | [https://poke-mini.onrender.com/api/external/pokemon/charizard](https://poke-mini.onrender.com/api/external/pokemon/charizard) |

---

## 🖼️ Frontend View

The frontend (in `public/index.html`) lets users:

- Type a Pokémon name
- Fetch its data via `/api/external/pokemon/:name`
- Display its sprite, type, height, and weight

Static assets served via:

```js
app.use(express.static(path.join(__dirname, "../public")));
```

---

## 🧰 Status Codes Reference

| Code                          | Meaning              | Example                                            |
| ----------------------------- | -------------------- | -------------------------------------------------- |
| **200 OK**                    | Successful request   | `res.status(200).json(data)`                       |
| **201 Created**               | Resource created     | `res.status(201).json(newUser)`                    |
| **204 No Content**            | No body needed       | `res.status(204).send()`                           |
| **400 Bad Request**           | Invalid input        | `res.status(400).json({ error: "Invalid input" })` |
| **401 Unauthorized**          | Missing/invalid auth | `res.status(401).json({ error: "Unauthorized" })`  |
| **403 Forbidden**             | Access not allowed   | `res.status(403).json({ error: "Forbidden" })`     |
| **404 Not Found**             | Wrong route          | `res.status(404).json({ error: "Not found" })`     |
| **409 Conflict**              | Duplicate data       | `res.status(409).json({ error: "Conflict" })`      |
| **500 Internal Server Error** | Unexpected crash     | `res.status(500).json({ error: "Server error" })`  |

---

## 🧭 Future Plans

- Add more endpoints (types, abilities, evolution chain)
- Integrate database (MongoDB or Postgres)
- Convert to MERN or Next.js fullstack project
- Add reusable `fetchJSON` utility
- Build a better UI with Tailwind or Chakra

---

## 👤 Author

Built by **Eude Laplace (eudeamonism)**
A foundational Node.js + Express deployment for learning REST APIs, modular structure, and CI/CD via Render.

💡 Feedback, forks, and pull requests welcome!

---

## 🌟 Live Demo

👉 [https://poke-mini.onrender.com/](https://poke-mini.onrender.com/)



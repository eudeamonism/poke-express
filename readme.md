# Node JS Prep
## Basics
```
mkdir njTest
cd njTest
npm i express cors morgan dotenv
npm i -D nodemon
```

## Folder Structure
In src folder, add
- lib
- middleware

## Commands

```
npm run start
npm run dev
```

## Status Codes

| Status Code                   | Meaning                     | When to Use                                     | Example                                                    |
| ----------------------------- | --------------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| **200 OK**                    | ✅ Success                   | For successful GET, PUT, PATCH, DELETE requests | `res.status(200).json(data)`                               |
| **201 Created**               | ✅ New resource created      | For successful POST that creates a record       | `res.status(201).json(newUser)`                            |
| **204 No Content**            | ✅ Success but no body       | For DELETE or updates where no body is needed   | `res.status(204).send()`                                   |
| **400 Bad Request**           | ⚠️ Client sent invalid data | Missing required field, invalid type, etc.      | `res.status(400).json({ error: "City is required" })`      |
| **401 Unauthorized**          | 🚫 No valid credentials     | When auth token or login required               | `res.status(401).json({ error: "Unauthorized" })`          |
| **403 Forbidden**             | 🚫 Not allowed              | User is authenticated but not permitted         | `res.status(403).json({ error: "Forbidden" })`             |
| **404 Not Found**             | ❌ Resource doesn’t exist    | Wrong route or ID                               | `res.status(404).json({ error: "User not found" })`        |
| **409 Conflict**              | ⚠️ Data conflict            | Attempting to create duplicate entry            | `res.status(409).json({ error: "Email already in use" })`  |
| **500 Internal Server Error** | 💥 Unexpected issue         | Database or code crash                          | `res.status(500).json({ error: "Internal Server Error" })` |

const express = require("express");
const app = express();
const { read, readOne, add, edit, remove } = require("./controller/controller");

app.use(express.json());

app.get("/api/animals", read);
app.get("/api/animals/:id", readOne);
app.post("/api/animals", add);
app.put("/api/animals/:id", edit);
app.delete("/api/animals/:id", remove);

const PORT = 4040;
app.listen(PORT, console.log("Mic check one two"));

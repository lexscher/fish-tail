const express = require('express');

const server = express();

const PORT = 3001 || process.env.PORT;

server.get("/", (req, res) => {
    res.json({ message: "success"})
})

const serverMessage = "Sever is running on port " + PORT
server.listen(PORT, () => console.log(serverMessage));
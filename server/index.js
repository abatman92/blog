const express = require("express");
const path = require("path");
const { urlencoded } = require("express");
const cors = require('cors');
const Model = require("./models/model");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("server is running"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app
    .get("/", async (_, res) => {
        const list = await Model.getAll()
        res.status(200).send(list)
    })
    .post("/post", async (req, res) => {
        const newPost = new Model(req.body.title, req.body.content);
        const newList = await Model.write(newPost);
        res.send(newList)
    })
    .delete("/post/:id", async (req, res) => {
        const newList = await Model.remove(req.params.id);
        res.send()
    })
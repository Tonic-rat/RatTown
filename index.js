
const http = require("http");
const host = 'localhost';
const port = 8000;
const fs = require('fs').promises;

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/Application/Home.html")
};

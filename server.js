const express = require("express")
app = express()
app.get("/", (req, res) => {
    res.end("<h1>Hello World !</h1>")
})

app.listen(8000)
const express = require("express")
app = express()

// app.get("/", (req, res) => {
//     res.end("<h1>Hello World !</h1>")
// })


app.use(express.static('public'))


app.listen(8000, () => {
	console.log(`Server listening at http://localhost:8000`)
})

const express = require("express")
const app = express()

// app.get("/", (req, res) => {
//     res.send("<h1>Hello World !</h1>")
// })




app.get('/students', (req, res) => {
	res.send([
		{name: "Martin", grade: 13},
		{name: "Thomas", grade: 15}
	])
})

app.use(express.static('public'))

app.listen(8000, () => {
	console.log(`Server listening at http://localhost:8000`)
})

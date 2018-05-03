import express from "express"
import path from "path"
import open from "open"
import compression from "compression"

const port = 3000
const app = express()

app.use(compression())
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.get('/users', (req, res) => {
  // hard coding to simplicity. pretend this hits a real database
  res.json([
    { "id": 1, "firstName": "A", "lastName": "aoao", "email": "a@gmail.com" },
    { "id": 2, "firstName": "B", "lastName": "bobo", "email": "c@gmail.com" },
    { "id": 3, "firstName": "C", "lastName": "coco", "email": "b@gmail.com" },
  ])
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    open('http://localhost:' + port)
    console.log("express server start.")
  }
})
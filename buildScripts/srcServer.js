import express from "express"
import path from "path"
import open from "open"
import webpack from "webpack"
import config from "../webpack.config.dev.js"

const port = 3000
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.get('/users', (req, res)=> {
  // hard coding to simplicity. pretend this hits a real database
  res.json([
    {"id": 1, "first":"A", "last":"aoao", "email": "a@gmail.com"},
    {"id": 2, "first":"B", "last":"bobo", "email": "c@gmail.com"},
    { "id": 3, "first": "C", "last": "coco", "email":"b@gmail.com"},
  ])
})

app.listen(port, (err)=>{
  if (err) {
    console.log(err)
  } else {
    open('http://localhost:' + port)
    console.log("express server start.")
  }
})
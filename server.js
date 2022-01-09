const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("keepAlive is running.")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("keepAlive server is ready.")
  })
}

module.exports = keepAlive
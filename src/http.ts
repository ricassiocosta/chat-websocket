import "reflect-metadata"
import express from "express"
import path from "path"
import { createServer } from "http"
import { Server } from "socket.io"
import mongoose from "mongoose"

const app = express()
app.use(express.static(path.join(__dirname, "..", "public")))

const server = createServer(app)
const io = new Server(server)

mongoose.connect("mongodb://localhost/chat-websocket", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

io.on("connection", (socket) => {
  console.log("socket", socket.id)
})

app.get("/", (request, response) => {
  return response.json({
    message: "hello websocket"
  })
})

export { server, io }
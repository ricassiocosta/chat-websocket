import express from "express"
import path from "path"
import { createServer } from "http"
import { Server } from "socket.io"

const app = express()
app.use(express.static(path.join(__dirname, "..", "public")))

const server = createServer(app)
const io = new Server(server)

io.on("connection", (socket) => {
  console.log("socket", socket.id)
})

app.get("/", (request, response) => {
  return response.json({
    message: "hello websocket"
  })
})

server.listen(5000, () => {
  console.log("server is running")
})
import { server } from "./http"
import "./websocket/ChatService"

server.listen(5000, () => {
  console.log("server is running")
})
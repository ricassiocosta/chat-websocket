import express, { response } from "express"

const app = express()

app.get("/", (request, response) => {
  return response.json({
    message: "hello websocket"
  })
})

app.listen(5000, () => {
  console.log("server is running")
})
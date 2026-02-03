const WebSocket = require("ws");

const PORT = process.env.PORT || 8080;

const wss = new WebSocket.Server({ port: PORT });

console.log("WebSocket server started on port", PORT);

wss.on("connection", ws => {
  console.log("Client connected");

  ws.on("message", msg => {
    try {
      const data = JSON.parse(msg);
      console.log("Event:", data);
    } catch {
      console.log("Raw:", msg.toString());
    }
  });

  ws.on("close", () => console.log("Client disconnected"));
});

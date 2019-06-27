import { Server } from "http";
import socketio from "socket.io";

export class SocketServer {
  private io: SocketIO.Server;
  constructor(server: Server) {
    this.io = socketio(server);
    this.startSockets();
  }
  private startSockets() {
    this.io.on("connect", (socket: any) => {
      console.log("Usuario conectado");
      socket.on("message", (m: any) => {
        console.log("[server](message): %s", JSON.stringify(m));
        this.io.emit("message", m);
      });

      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });
    console.log("SocketServer habilitado");
  }
}

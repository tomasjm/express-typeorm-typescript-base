import { MainServer } from "./server";
import { SocketServer } from "./sockets";
let appServer = new MainServer();
let ioServer = new SocketServer(appServer.getIO());
let app = appServer.getApp();

export { app, ioServer };

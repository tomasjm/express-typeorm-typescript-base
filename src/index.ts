import { MainServer } from "./server";
import { SocketServer } from "./sockets";
import { GraphQLServer } from "./graphql";
let appServer = new MainServer();
let ioServer = new SocketServer(appServer.getServer());
let graphqlServer = new GraphQLServer(appServer.getApp());
let app = appServer.getApp();

export { app, ioServer, graphqlServer };

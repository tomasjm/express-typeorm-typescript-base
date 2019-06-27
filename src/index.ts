import { MainServer } from "./server";
import { SocketServer } from "./sockets";
import { GraphQLServer } from "./graphql";
let appServer = new MainServer();
let app = appServer.getApp();
let server = appServer.getServer();

/**
 * INICIALIZACION DE AÑADIDOS MODULARES
 */

// Inicializa servidor de Socket-IO, comentar para desactivar
let ioServer = new SocketServer(server);
// Inicializa servidor de GraphQL y ApolloServer, comentar para desactivar
let graphqlServer = new GraphQLServer(app);

export { app };

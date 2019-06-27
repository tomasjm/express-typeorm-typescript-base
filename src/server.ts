import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import passport from "passport";

import indexRoutes from "./routes/index.routes";
import postRoutes from "./routes/post.routes";
import userRoutes from "./routes/user.routes";
import oauthRoutes from "./routes/oauth.routes";

import { createServer, Server } from "http";

export class MainServer {
  /**
   * Propiedad que contiene el objeto de Express, es decir, la aplicación backend.
   */
  private app!: express.Application;
  private server!: Server;
  /**
   * Se inicializa el servidor en conjunto de sus configuraciones, middlewares y rutas.
   */
  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.config();
    this.middlewares();
    this.routes();
    this.start();
  }
  /**
   * Metodo que inicializa las configuraciones de la app de Express.
   */
  private config() {
    this.app.set("port", process.env.PORT || 4000);
  }
  /**
   * Metodo que inicializa los middlewares de la app de Express.
   */

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan("dev"));
    this.app.use(helmet());

    this.app.use(compression());
    this.app.use(passport.initialize());
  }
  /**
   * Metodo que inicializa las rutas de la app de Express.
   */
  private routes() {
    this.app.use(indexRoutes);
    this.app.use("/post", postRoutes);
    this.app.use("/user", userRoutes);
    this.app.use("/oauth", oauthRoutes);
  }
  /**
   * Metodo que inicializa el servidor.
   */
  private start() {
    this.server.listen(this.app.get("port"), () => {
      console.log("Server running on port", this.app.get("port"));
    });
  }

  public getApp(): express.Application {
    return this.app;
  }
  public getServer(): Server {
    return this.server;
  }
}

/**
 * Se realiza la conexión a la base de datos via ORM, si se logra, se inicia el servidor.
 */
createConnection().then(() => {
  console.log("orm conectado");
});

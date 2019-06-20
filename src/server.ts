import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

import indexRoutes from "./routes/indexRoutes";
import postRoutes from "./routes/postRoutes";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  config() {
    this.app.set("port", process.env.PORT || 3000);
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan("dev"));
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(compression());
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use("/post", postRoutes);
  }

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server running on port", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();

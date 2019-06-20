import { Router } from "express";

import postController from "../controllers/postController";

class PostRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }
  routes() {
    this.router.get("/", postController.getPosts);
  }
}

const postRoutes = new PostRoutes();
export default postRoutes.router;

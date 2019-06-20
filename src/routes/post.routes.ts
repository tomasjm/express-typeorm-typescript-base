import { Router } from "express";
import postController from "../controllers/post.controller";

/**
 * Clase correspondiente a las rutas iniciales del servidor.
 */
class PostRoutes {
  /**
   * Representa al objeto Router de Express, que recibe las rutas.
   */
  public router: Router;
  /**
   * Inicializa la clase PostRoutes.
   */
  constructor() {
    this.router = Router();
    this.routes();
  }
  /**
   * Metodo en la cual se establecen las rutas de la clase PostRoutes.
   * Las rutas son establecidas con los parametros ruta y controlador.
   */
  routes() {
    this.router.get("/", postController.getPosts);
  }
}
/**
 * Variable que contiene a la clase inicializada y la exporta.
 */
const postRoutes = new PostRoutes();
export default postRoutes.router;

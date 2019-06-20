import { Request, Response, Router } from "express";
import indexController from "../controllers/indexController";

/**
 * Clase correspondiente a las rutas iniciales del servidor.
 */
class IndexRoutes {
  /**
   * Representa al objeto Router de Express, que recibe las rutas.
   */
  public router: Router;
  /**
   * Inicializa la clase IndexRoutes.
   */
  constructor() {
    this.router = Router();
    this.routes();
  }
  /**
   * Metodo en la cual se establecen las rutas de la clase IndexRoutes.
   * Las rutas son establecidas con los parametros ruta y controlador.
   */
  routes() {
    this.router.get("/", indexController.initialRoute);
  }
}
/**
 * Variable que contiene a la clase inicializada y la exporta.
 */
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;

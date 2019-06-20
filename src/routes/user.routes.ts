import { Router } from "express";
import userController from "../controllers/user.controller";

/**
 * Clase correspondiente a las rutas iniciales del servidor.
 */
class UserRoutes {
  /**
   * Representa al objeto Router de Express, que recibe las rutas.
   */
  public router: Router;
  /**
   * Inicializa la clase UserRoutes.
   */
  constructor() {
    this.router = Router();
    this.routes();
  }
  /**
   * Metodo en la cual se establecen las rutas de la clase UserRoutes.
   * Las rutas son establecidas con los parametros ruta y controlador.
   */
  routes() {
    this.router.get("/", userController.getUsers);
  }
}
/**
 * Variable que contiene a la clase inicializada y la exporta.
 */
const userRoutes = new UserRoutes();
export default userRoutes.router;

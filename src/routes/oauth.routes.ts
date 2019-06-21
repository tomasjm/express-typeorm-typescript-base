import { Router, Request, Response } from "express";
import oauthController from "../controllers/oauth.controller";
import passport from "passport";
import { resolve } from "path";

/**
 * Clase correspondiente a las rutas de autenticación OAuth del servidor.
 */
class OAuthRoutes {
  /**
   * Representa al objeto Router de Express, que recibe las rutas.
   */
  public router: Router;
  /**
   * Inicializa la clase OAuthRoutes.
   */
  constructor() {
    this.router = Router();
    this.routes();
  }
  /**
   * Metodo en la cual se establecen las rutas de la clase OAuthRoutes.
   * Las rutas son establecidas con los parametros ruta y controlador.
   */
  routes() {
    this.router.post("/facebook", passport.authenticate("facebook-token", { session: false }), oauthController.facebookLogin, oauthController.handleCallback);
  }
}
/**
 * Variable que contiene a la clase inicializada y la exporta.
 */
const oauthRoutes = new OAuthRoutes();
export default oauthRoutes.router;

import { Request, Response } from "express";

/**
 * Clase correspondiente al controlador principal.
 * @class IndexController
 */
class IndexController {
  /**
   * Ruta inicial del servidor.
   * @param {Request} req - Maneja el objeto de peticion.
   * @param {Response} res - Maneja el objeto de respuesta.
   */
  public initialRoute(req: Request, res: Response) {
    res.send({
      response: true,
      data: "Servidor funcionando correctamente"
    });
  }
}
const indexController = new IndexController();
export default indexController;

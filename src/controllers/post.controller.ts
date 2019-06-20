import { Request, Response } from "express";

/**
 * Clase correspondiente al controlador de los posts.
 * @class PostController.
 */
class PostController {
  /**
   * Ruta /posts que devuelve los posts.
   * @param {Request} req - Maneja el objeto de peticion.
   * @param {Response} res - Maneja el objeto de respuesta.
   * @returns - Devuelve una lista con todos los posts.
   */
  public getPosts(req: Request, res: Response) {
    res.send({
      response: true,
      data: {
        posts: []
      }
    });
  }
}
const postController = new PostController();
export default postController;

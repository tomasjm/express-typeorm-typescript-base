import { Request, Response } from "express";
import { User } from "../entity/User";
import { getRepository } from "typeorm";

/**
 * Clase correspondiente al controlador de los usuarios.
 * @class UserController
 */
class UserController {
  /**
   * Ruta /posts que devuelve los posts.
   * @param {Request} req - Maneja el objeto de peticion.
   * @param {Response} res - Maneja el objeto de respuesta.
   * @returns {User[]}- Devuelve una lista con todos los usuarios.
   */
  public async getUsers(req: Request, res: Response) {
    /**
     *  getRepository(entity: Entity).find() devuelve todos los datos de la entidad.
     */
    let users = await getRepository(User).find();
    /**
     * Se envia una respuesta tipo json con los usuarios.
     */
    res.send({
      response: true,
      data: {
        users
      }
    });
  }
}
const userController = new UserController();
export default userController;

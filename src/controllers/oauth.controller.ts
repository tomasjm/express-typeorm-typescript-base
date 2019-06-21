import { Request, Response, Errback } from "express";
import { getRepository } from "typeorm";
import passport from "passport";
import config from "../config";

import genToken from "../utils/token";

import { User } from "../entity/User";
import { NextFunction } from "connect";

var FacebookTokenStrategy = require("passport-facebook-token");

/**
 * Clase correspondiente a OAuthController, clase que contiene todos los métodos lógicos
 * de autenticación con servicio de terceros.
 * @class OAuthController
 */
class OAuthController {
  /**
   * Inicializando la clase.
   */
  constructor() {
    /**
     * Aca inicializamos los paquetes de PassportJS para implementar la autenticación
     */
    this.setupFacebookPassport(); // Facebook
  }


  /**
   * Método para inicializar la estrategia de autenticación de Facebook con Passportjs
   * Es necesario configurar el archivo en config.ts con el ClientID y ClientSecret de una aplicación
   * de facebook en Facebook Developers
   */
  setupFacebookPassport() {
    /**
     * Al inicializar la estrategia, este devuelve un callback luego de confirmar el token de acceso. 
     */
    passport.use(
      new FacebookTokenStrategy(
        {
          clientID: config.oauth.facebook.clientID,
          clientSecret: config.oauth.facebook.clientSecret,
          fbGraphVersion: "v3.0"
        },
        async (
          accessToken: string,
          refreshToken: string,
          profile: any,
          done: any
        ) => {
          try {
            /**
             * Se valida si es que el usuario ya está registrado utilizando facebook
             */
            const existingUser = await getRepository(User).find({
              facebook_id: profile.id
            });
            /**
             * Existirán 2 casos: Existencia de cuenta y no existencia de esta.
             */
            if (existingUser.length > 0) {
              /**
               * Si la cuenta existe, se firma un token con el usuario de tipo "FACEBOOK_TYPE"
               */
              const token = await genToken(existingUser[0], "FACEBOOK_TYPE");
              done(null, token); // Se regresa el token para ser accedido desde el objeto Request (req.user) de la petición.
            } else {
              /**
               * Si la cuenta no existe, se crea el usuario y se firma un token con el usuario de tipo "FACEBOOK_TYPE"
               */
              const user = new User();
              user.nombre = profile.name.givenName;
              user.apellido = profile.name.familyName;
              user.email = profile.emails[0].value;
              user.facebook_id = profile.id;
              user.google_id = "";
              user.password = "null";
              await getRepository(User).save(user);
              const token = await genToken(user, "FACEBOOK_TYPE");
              done(null, token); // Se regresa el token para ser accedido desde el objeto Request (req.user) de la petición.
            }
            done(null, profile);
          } catch (error) {
            /**
             * En caso de error, devuelve un error y no se incluye el token en req.user.
             */
            done(error, null, error.message);
          }
        }
      )
    );
  }
  /**
   * Función que se encarga de devolver el token (req.user) obtenido del Setup de Facebook.
   */
  facebookLogin(req: Request, res: Response) {
    console.log("asdasdasd")
    res.send({
      response: true,
      data: req.user
    });
  }

  /**
   * Función que se encarga de revisar si hay un error en el checkeo de los tokens de acceso para autenticación OAuth.
   */
  handleCallback(err: Errback, req: Request, res: Response, next: NextFunction) {
    if (err) {
      res.send({
        response: false,
        data: "Ha ocurrido un error al autenticar"
      });
    }
  }
}
const oauthController = new OAuthController();
export default oauthController;


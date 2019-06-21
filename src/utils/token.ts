import jwt from "jsonwebtoken";
import moment from "moment";

import config from "../config";

/**
 * Función para firmar un token JWT con expiración de 30 dias default.
 * @param data - Recibe un objeto que debe contener el id de usuario.
 * @param acc_type - Recibe un string que tiene que ser del tipo: "NORMAL_TYPE", "FACEBOOK_TYPE", "GOOGLE_TYPE"
 * @return {string} - Devuelve el token firmado.
 */
const token = (data: any, acc_type: string): string => {
    const genToken = jwt.sign({
        id: data.id,
        account_type: acc_type,
        exp: moment().add("30", "day").unix()
    }, config.JWT_SECRET);
    return genToken;
}

export default token;
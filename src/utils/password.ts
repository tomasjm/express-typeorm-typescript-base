const bcrypt = require("bcrypt");
const salt: number = 12;

/**
 * Función para encriptar contraseñas utilizando el método de BCrypt con 12 vueltas.
 * @param password - String de contraseña a encriptar.
 * @type {string}
 * @return {string} - Retorna un Hash que es la contraseña encriptada.
 */
const cryptPassword = (password: string): string => {
    return bcrypt.hashSync(password, salt);
};

export default cryptPassword;
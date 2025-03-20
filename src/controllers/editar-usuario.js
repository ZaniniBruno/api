const User = require('../models/user-model');
class EditeUsuarioController {

    /**
   * @param {HttpRequest} request - Objeto da requisição HTTP
   * @returns {Promise<HttpResponse>}
   */
    async handle(httpRequest) {
        try {

            const body = httpRequest.body
            const params = httpRequest.params
            const usuario = await User.findByPk(params.id);
            await usuario.update(body)


            return {
                statusCode: 201,
                body: usuario,
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: { error: error.message },
            };
        }
    }
}

module.exports = EditeUsuarioController;
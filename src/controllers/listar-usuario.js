const User = require('../models/user-model');
class ListaUsuarioController {

    /**
   * @param {HttpRequest} request - Objeto da requisição HTTP
   * @returns {Promise<HttpResponse>}
   */
    async handle(httpRequest) {
        try {
            
            const usuario = await List.findAll({
                nome,
                
            });

            return {
                statusCode: 200,
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

module.exports = ListaUsuarioController;
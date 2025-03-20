/**
 * @typedef {Object} HttpRequest
 * @property {object} body
 */

/**
 * @typedef {Object} HttpResponse
 * @property {number} statusCode
 * @property {Object} body
 */

/**
 * @typedef {Object} Controller
 * @property {( HttpRequest: HttpRequest) => Promise<HttpResponse>} handle
 */
module.exports = {};
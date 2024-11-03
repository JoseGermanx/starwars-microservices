

class ClientErrors extends Error {
  constructor( message, statusCode = 400 ) {
    super(message);
    this.statusCode = statusCode;
  }

    static badRequest( message ) {
        return new ClientErrors(message, 404);
    }
}

module.exports = { ClientErrors };
const messages = {
  400: "Bad Request",
  401: "Not authorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
  default: "Something went wrong, please try again later...",
};

class HttpError extends Error {
  constructor(status = 500, message = messages[status] || messages.default) {
    super(message);
    this.status = status;
  }
}

module.exports = HttpError;

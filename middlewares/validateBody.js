const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    console.log(error);
    if (error) {
      next(HttpError(400, "missing required name field"));
    }
    next();
  };
  return func;
};

module.exports = validateBody;

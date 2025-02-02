const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewares");

const ctrl = require("../../controllers/auth");

const schemas = require("../../schemas/validationUserSchema");

const router = express.Router();

router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrl.register
);

router.get("/users/verify/:verificationToken", ctrl.verifyEmail);

router.post(
  "/users/verify",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

router.post("/users/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/users/current", authenticate, ctrl.getCurrent);

router.post("/users/logout", authenticate, ctrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;

import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import { UserRepository } from "../repositories/user.repository";
import { validateBody } from "../middlewares/validate.middleware";
import { registerUserSchema, loginUserSchema } from "../validators/auth.validator";

const router = Router();
const controller = new AuthController(
  new AuthService(new UserRepository())
);

router.post("/register", validateBody(registerUserSchema), controller.register.bind(controller));
router.post("/login", validateBody(loginUserSchema), controller.login.bind(controller));

export default router;
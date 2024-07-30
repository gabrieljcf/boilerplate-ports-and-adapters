import { UserService } from "@/application/services/userService";
import { UserRepositoryInMemory } from "@/infrastructure/repositories/userRepositoryInMemory";
import { UserController } from "../controllers/userController";
import { NextFunction, Request, Response, Router } from "express";

const userRoutes = Router();
const userRepository = new UserRepositoryInMemory();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRoutes.get("/", (req: Request, res: Response, next: NextFunction) =>
  userController.listUsers(req, res, next)
);
userRoutes.get("/:id", (req: Request, res: Response, next: NextFunction) =>
  userController.findUserById(req, res, next)
);
userRoutes.post("/", (req: Request, res: Response, next: NextFunction) =>
  userController.createUser(req, res, next)
)

export { userRoutes };

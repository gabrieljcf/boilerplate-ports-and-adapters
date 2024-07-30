import { UserService } from "@/application/services/userService";
import { NextFunction, Request, Response } from "express";

export class UserController {
  constructor(readonly userService: UserService) {}

  async listUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.listUsers();
      return res.json(users).send();
    } catch (error) {
      next(error);
    }
  }

  async findUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await this.userService.findById(+id);
      return res.json(user).send();
    } catch (error) {
      next(error);
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const input = req.body;
      const user = await this.userService.createUser(input);
      return res.json(user).send();
    } catch (error) {
      next(error);
    }
  }
}

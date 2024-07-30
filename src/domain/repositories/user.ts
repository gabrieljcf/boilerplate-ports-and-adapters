import { User } from "../models/user";

export interface UserRepository {
  findAllUsers(): Promise<User[]>;
  emailExists(email: string): Promise<boolean>;
  saveUser(user: User): Promise<void>;
  findById(id: number): Promise<User | null>;
}

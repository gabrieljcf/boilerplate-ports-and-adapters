import { InvalidDataException, NotFoundException } from "@/domain/errors";
import { User } from "@/domain/models/user";
import { UserRepository } from "@/domain/repositories/user";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async listUsers() {
    return this.userRepository.findAllUsers();
  }

  async findById(id: number) {
    const user = await this.userRepository.findById(id);
    if (!user) throw new NotFoundException("Usuário não encontrado.");
    return user;
  }

  async createUser(input: User) {
    const emailAllReadyExists = await this.userRepository.emailExists(
      input.email
    );
    if (emailAllReadyExists) {
      throw new InvalidDataException("Email já cadastrado.");
    }
    const user = new User(input);
    this.userRepository.saveUser(user);
  }
}

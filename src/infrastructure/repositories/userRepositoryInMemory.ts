import { User } from "@/domain/models/user";
import { UserRepository } from "@/domain/repositories/user";

export class UserRepositoryInMemory implements UserRepository {
  private users: User[] = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
  ];

  async findAllUsers(): Promise<User[]> {
    return this.users;
  }

  async emailExists(email: string): Promise<boolean> {
    return this.users.some((user) => user.email === email);
  }

  async saveUser(user: User): Promise<void> {
    user.id = this.users.length + 1
    this.users.push(user);
  }

  async findById(id: number): Promise<User | null> {
    const user = this.users.find(user => user.id === id)
    return user || null
  }
}

export class User {
  id?: number;
  name: string;
  email: string;
  // address: Address

  constructor(user: User) {
    if (!user.name) throw new Error("Name is required.");
    if (!user.email) throw new Error("Email is required.");
    this.name = user.name;
    this.email = user.email;
  }
}

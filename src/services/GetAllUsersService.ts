import { User } from "../schemas/User";

class GetAllUsersService {
  async execute(): Promise<User[]> {
    const users = await User.find();

    return users;
  }
}

export { GetAllUsersService }
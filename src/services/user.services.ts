import UserModel from '../models/user.models';
import User from '../interfaces/users.interface';
import connection from '../models/connection';
import Token from '../auth/authFunctions';

class UserService {
  public model: UserModel;

  public token;
  
  constructor() {
    this.model = new UserModel(connection);
    this.token = new Token();
  }
  
  public async create(entry: User): Promise<string> {
    const user = await this.model.create(entry);
    const token = this.token.generateToken(user);
    return token;
  }
}

export default UserService;
import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/users.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(entry: User): Promise<User> {
    const { username, vocation, level, password } = entry;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    return { id: insertId, username, vocation, level, password };
  }
}
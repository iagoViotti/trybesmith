import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/orders.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [result] = await this.connection.execute<Order[] & RowDataPacket[]>(
      `SELECT
      O.id AS id,
      O.user_id As userId,
        JSON_ARRAYAGG(P.id) AS productsIds
    FROM Trybesmith.orders AS O
    INNER JOIN Trybesmith.products AS P
    ON O.id = P.order_id
    GROUP BY O.id`,
    );
    return result;
  }
}
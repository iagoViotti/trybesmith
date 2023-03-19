import ProductModel from '../models/product.model';
import Product from '../interfaces/products.interface';
import connection from '../models/connection';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(entry: Product): Promise<Product> {
    const product = await this.model.create(entry);
    return product;
  }
}

export default ProductService;
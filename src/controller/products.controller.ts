import { Request, Response } from 'express';
import ProductService from '../services/products.services';

class ProductsController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.productService.create(product);
    res.status(201).json(newProduct);
  };
}

export default ProductsController;
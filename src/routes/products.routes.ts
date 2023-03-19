import { Router } from 'express';
import ProductsController from '../controller/products.controller';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/products', productsController.create);

productsRouter.get('/products', productsController.getAll);

export default productsRouter;
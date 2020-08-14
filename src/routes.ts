import express from 'express';

import ProductController from './controllers/ProductController';
import ProviderController from './controllers/ProviderController';
import CityController from './controllers/CityController';
import CategoryController from './controllers/CityController';

const routes = express.Router();
const productController = new ProductController();
const providerController = new ProviderController();
const cityController = new CityController();
const categoryController = new CategoryController();


// !-------   Start of Basic Cruds   -------!

// Product
routes.get('/products', productController.index);
routes.post('/products', productController.create);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.delete);


// Provider
routes.get('/providers', providerController.index);
routes.post('/providers', providerController.create);
routes.put('/providers/:id', providerController.update);
routes.delete('/providers/:id', providerController.delete);


// City
routes.get('/cities', cityController.index);
routes.post('/cities', cityController.create);
routes.put('/cities/:id', cityController.update);
routes.delete('/cities/:id', cityController.delete);


// Todo: Category
routes.get('/categories', categoryController.index);
routes.post('/categories', categoryController.create);
routes.put('/categories/:id', categoryController.update);
routes.delete('/categories/:id', categoryController.delete);

// Todo: Transporter


// Todo: Store


// !-------   End of Basic Cruds   -------!

export default routes;
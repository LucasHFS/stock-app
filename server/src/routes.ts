import express from 'express';

import ProductController from './app/controllers/ProductController';
import ProviderController from './app/controllers/ProviderController';
import CityController from './app/controllers/CityController';
import CategoryController from './app/controllers/CityController';
import StoreController from './app/controllers/StoreController';
import TransporterController from './app/controllers/TransporterController';

const routes = express.Router();
const productController = new ProductController();
const providerController = new ProviderController();
const cityController = new CityController();
const categoryController = new CategoryController();
const storeController = new StoreController();
const transporterController = new TransporterController();


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

// Todo: Category
routes.get('/categories', categoryController.index);
routes.post('/categories', categoryController.create);
routes.put('/categories/:id', categoryController.update);
routes.delete('/categories/:id', categoryController.delete);

// Todo: Transporter
routes.get('/transporters', transporterController.index);
routes.get('/transporters/:id', transporterController.findOne);
routes.post('/transporters', transporterController.create);
routes.put('/transporters/:id', transporterController.update);
routes.delete('/transporters/:id', transporterController.delete);

// Todo: Store
routes.get('/stores', storeController.index);
routes.get('/stores/:id', storeController.findOne);
routes.post('/stores', storeController.create);
routes.put('/stores/:id', storeController.update);
routes.delete('/stores/:id', storeController.delete);

// Todo: City
routes.get('/cities', cityController.index);
routes.post('/cities', cityController.create);
routes.put('/cities/:id', cityController.update);
routes.delete('/cities/:id', cityController.delete);

// !-------   End of Basic Cruds   -------!

export default routes;
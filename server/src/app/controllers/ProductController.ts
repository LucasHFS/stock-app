import knex from '../../database/connection';
import { Request, Response } from 'express';

class ProductController {

  async index( req: Request, res: Response ) {
    const products = await knex('product').select('*'); //Todo: Define which columns will be returned
    return res.json(products);
  }

  async create( req: Request, res: Response ) {
    const { name, uf } = req.body;

    //Todo: validate data

    const inserted = await knex('product').insert({
      name,
      uf,
    });

    return res.json(inserted);
  }

  async update( req: Request, res: Response ) {
    const {id} = req.params;
    const { name, uf } = req.body;
    
    //Todo: validate data

    const updated = await knex('product')
    .where('id', id)
    .update({
      name: name,
      uf: uf,
    });

    return res.json({msg: 'update'});
  }

  async delete( req: Request, res: Response ) {
    const {id} = req.params;
    const product = await knex('product').where('id', id);

    if(!product){
      return res.status(404).json({msg: 'Product not found!'});
    }

    return res.json(product);
  }

}

export default ProductController;
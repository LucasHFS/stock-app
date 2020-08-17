import knex from '../../database/connection';
import { Request, Response } from 'express';

/**
 * Todo:
 * Joi Validations
 */

class StoreController {

  async index( req: Request, res: Response ) {
    const stores = await knex('store').select('*');
    return res.json(stores);
  }

  async create( req: Request, res: Response ) {
    const { name, address, address_number, address_district, telephone, cnpj, city_id } = req.body;
    //validate data

    const insertedStore = await knex('store').insert({
      name, 
      address, 
      address_number, 
      address_district, 
      telephone, 
      cnpj, 
      city_id
    });

    return res.status(201).json({id: insertedStore[0]});
  }

  async update( req: Request, res: Response ) {
    //validate data
    const { id } = req.params;
    const { name, address, address_number, address_district, telephone, cnpj, city_id } = req.body;
    //validate data

    const insertedStore = await knex('store')
        .where('id', id)
        .update({
          name, 
          address, 
          address_number, 
          address_district, 
          telephone, 
          cnpj, 
          city_id
        });

    return res.json(insertedStore);
  }

  async delete( req: Request, res: Response ) {
    const { id } = req.params;
    const store = await knex('store').where('id', id);

    if(store.length === 0){
      return res.status(404).json({error: 'Store not found!'});
    }

    await knex('store').where('id', id).delete();

    return res.json(store);
  }

}

export default StoreController;
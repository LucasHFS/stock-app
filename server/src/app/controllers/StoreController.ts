import knex from '../../database/connection';
import { Transaction } from 'knex';
import { Request, Response } from 'express';

/**
 * Todo:
 * Joi Validations
 */

class StoreController {


  async index( req: Request, res: Response ) {
    const stores = await knex('store').innerJoin('city', 'store.city_id', 'city.id').select('store.*', 'city.name as city_name', 'city.uf as city_uf');
    return res.json(stores);
  }

  async findOne( req: Request, res: Response ) {
    const { id } = req.params;
    const store = await knex('store').innerJoin('city', 'store.city_id', 'city.id').select('store.*', 'city.id as city_id', 'city.name as city_name', 'city.uf as city_uf').where('store.id', '=', id);
    return res.json(store[0]);
  }

  async create( req: Request, res: Response ) {
    const trx = await knex.transaction();

    const { name, address, address_number, address_district, telephone, cnpj, city, uf } = req.body;
    //validate data

    //Check if needs to insert new city or use an existing one
    const dbCity = await trx('city').where('uf', '=', uf).where('name', '=', city);
    let cityId = 0;

    if(dbCity.length > 0){
      cityId = dbCity[0].id;
    }else{
      cityId = await trx('city').insert({uf, name:city});
    }
    console.log(cityId);
    const insertedStore = await trx('store').insert({
      name, 
      address, 
      address_number, 
      address_district, 
      telephone, 
      cnpj, 
      city_id: cityId,
    });
    await trx.commit();


    return res.status(201).json({id: insertedStore[0]});
  }

  async update( req: Request, res: Response ) {

    const trx = await knex.transaction();

    //validate data
    const { id } = req.params;
    const { name, address, address_number, address_district, telephone, cnpj, uf, city } = req.body;
    //validate data

    //Check if needs to insert new city or use an existing one
    const dbCity = await trx('city').where('uf', '=', uf).where('name', '=', city);
    let cityId = 0;

    if(dbCity.length > 0){
      cityId = dbCity[0].id;
    }else{
      cityId = await trx('city').insert({uf, name:city});
    }
    
    const updatedStore = await trx('store')
        .where('id', id)
        .update({
          name, 
          address, 
          address_number, 
          address_district, 
          telephone, 
          cnpj, 
          city_id: cityId,
        });

    await trx.commit();
    return res.json(updatedStore);
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
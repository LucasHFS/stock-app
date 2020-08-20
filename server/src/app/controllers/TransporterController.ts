import knex from '../../database/connection';
import { Request, Response } from 'express';

/**
 * Todo:
 * Joi Validations
 */

class TransporterController {

  async index( req: Request, res: Response ) {
    const transporters = await knex('transporter').innerJoin('city', 'transporter.city_id', 'city.id').select('transporter.*', 'city.name as city_name', 'city.uf as city_uf');
    return res.json(transporters);
  }

  async findOne( req: Request, res: Response ) {
    const { id } = req.params;
    const transporter = await knex('transporter').innerJoin('city', 'transporter.city_id', 'city.id').select('transporter.*', 'city.id as city_id', 'city.name as city_name', 'city.uf as city_uf').where('transporter.id', '=', id);
    return res.json(transporter[0]);
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
    
    const insertedTransporter = await trx('transporter').insert({
      name, 
      address, 
      address_number, 
      address_district, 
      telephone, 
      cnpj, 
      city_id: cityId,
    });
    await trx.commit();


    return res.status(201).json({id: insertedTransporter[0]});
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
    
    const updatedTransporter = await trx('transporter')
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

    return res.json(updatedTransporter);
  }

  async delete( req: Request, res: Response ) {
    const { id } = req.params;
    const transporter = await knex('transporter').where('id', id);

    if(transporter.length === 0){
      return res.status(404).json({error: 'Transporter not found!'});
    }

    await knex('transporter').where('id', id).delete();

    return res.json(transporter);
  }
}

export default TransporterController;
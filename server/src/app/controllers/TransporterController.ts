import knex from '../../database/connection';
import { Request, Response } from 'express';

/**
 * Todo:
 * Joi Validations
 */

class TransporterController {

  async index( req: Request, res: Response ) {
    const transporters = await knex('transporter').select('*');
    return res.json(transporters);
  }

  async create( req: Request, res: Response ) {
    const { name, address, address_number, address_district, address_cep, telephone, cnpj, city_id } = req.body;
    //validate data

    const insertedTransporter = await knex('transporter').insert({
      name, 
      address, 
      address_number, 
      address_district, 
      address_cep,
      telephone, 
      cnpj, 
      city_id
    });

    return res.status(201).json({id: insertedTransporter[0]});
  }

  async update( req: Request, res: Response ) {
    //validate data
    const { id } = req.params;
    const { name, address, address_number, address_district, address_cep, telephone, cnpj, city_id } = req.body;
    //validate data

    const insertedTransporter = await knex('transporter')
        .where('id', id)
        .update({
          name, 
          address, 
          address_number, 
          address_district, 
          address_cep,
          telephone, 
          cnpj, 
          city_id
        });

    return res.json(insertedTransporter);
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
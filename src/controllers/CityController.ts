import knex from '../database/connection';
import { Request, Response } from 'express';
import Joi from 'joi';

class CityController {

  async index( req: Request, res: Response ) {
    const cities = await knex('city').select('*'); //Todo: Define which columns will be returned
    return res.json(cities);
  }

  async create( req: Request, res: Response ) {
    const { name, uf } = req.body;

    //Todo: validate data

    const schema = Joi.object().keys({
      name: Joi.string().required,
      uf: Joi.string().length(2).required,
    });
    // Todo here

    const inserted = await knex('city').insert({
      name,
      uf,
    });

    return res.json(inserted);
  }

  async update( req: Request, res: Response ) {
    const {id} = req.params;
    const { name, uf } = req.body;
    
    //Todo: validate data

    const updated = await knex('city')
    .where('id', id)
    .update({
      name: name,
      uf: uf,
    });

    return res.json(updated);
  }

  async delete( req: Request, res: Response ) {
    const {id} = req.params;
    const city = await knex('city').where('id', id);

    if(!city){
      return res.status(404).json({msg: 'City not found!'});
    }

    return res.json(city);
  }

}

export default CityController;
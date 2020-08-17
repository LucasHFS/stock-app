import knex from '../../database/connection';
import { Request, Response } from 'express';
import Joi from 'joi';

class CityController {

  async index( req: Request, res: Response ) {
    const cities = await knex('city').select('*'); //Todo: Define which columns will be returned
    return res.json(cities);
  }

  async create( req: Request, res: Response ) {
    const { name, uf } = req.body;

    const schema = Joi.object({
      name: Joi.string().required(),
      uf: Joi.string().length(2).required(),
    });

    const { error, value } = schema.validate({name,uf});

    if(error){
      return res.status(400).json(error);
    }

    const insertedCity = await knex('city').insert(value);
    return res.status(201).json({id: insertedCity[0]});
  }

  async update( req: Request, res: Response ) {
    const {id} = req.params;
    const { name, uf } = req.body;
    
    //Todo: validate data

    const schema = Joi.object({
      id: Joi.number().required(),
      name: Joi.string(),
      uf: Joi.string().length(2),
    });

    const { error, value } = schema.validate({id, name,uf});

    if(error || (!name && !uf)){
      return res.status(400).json(error||{error: 'Fields not filled.'});
    }

    try {
      const updated = await knex('city')
      .where('id', id)
      .update(value);
      
      return res.json(updated);
    } catch(err) {
      return res.status(404).json(error||{error: 'City not found.'});
    }
  }

  async delete( req: Request, res: Response ) {
    const {id} = req.params;
    const city = await knex('city').where('id', '=',  id);

    if(city.length === 0){
      return res.status(404).json({msg: 'City not found!'});
    }
    await knex('city').where('id', id).delete();
    return res.json(city);
  }

}

export default CityController;
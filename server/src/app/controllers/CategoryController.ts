import knex from '../../database/connection';
import { Request, Response } from 'express';

class CategoryController {

  async index( req: Request, res: Response ) {
    const categories = await knex('category').select('*'); //Todo: Define which columns will be returned
    return res.json(categories);
  }

  async create( req: Request, res: Response ) {
    const { name } = req.body;

    //Todo: validate data

    const inserted = await knex('category').insert({
      name,
    });

    return res.json(inserted);
  }

  async update( req: Request, res: Response ) {
    const {id} = req.params;
    const { name } = req.body;
    
    //Todo: validate data

    const updated = await knex('category')
    .where('id', id)
    .update({
      name: name,
    });

    return res.json(updated);
  }

  async delete( req: Request, res: Response ) {
    const {id} = req.params;
    const category = await knex('category').where('id', id);

    if(!category){
      return res.status(404).json({msg: 'Category not found!'});
    }

    return res.json(category);
  }

}

export default CategoryController;
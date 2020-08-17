import knex from '../../database/connection';
import { Request, Response } from 'express';

class ProviderController {

  async index( req: Request, res: Response ) {
    return res.json({msg: 'index'});
  }

  async create( req: Request, res: Response ) {
    //validate data

    return res.json({msg: 'create'});
  }

  async update( req: Request, res: Response ) {
    //validate data

    return res.json({msg: 'update'});
  }

  async delete( req: Request, res: Response ) {
    return res.json({msg: 'delete'});
  }

}

export default ProviderController;
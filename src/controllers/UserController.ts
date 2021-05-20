import mongoose from 'mongoose';
import { Request, Response } from 'express';

import UserSchema from '../models/User';

export class UserController {

    public create(req: Request, res: Response){
        const { user } = req.body;
    }

    public read(req: Request, res: Response){
        const { user } = req.body;
    }

    public update(req: Request, res: Response){
        const { user } = req.body;
    }

    public delete(req: Request, res: Response){
        const { user } = req.body;
    }
}
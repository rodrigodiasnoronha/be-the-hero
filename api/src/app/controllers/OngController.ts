import { Request, Response } from 'express';
import { Ong } from '../../types';
// import { createOngValidator } from '../validators';
import database from '../../database';

interface StoreBodyData {
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
}

class OngController {
    public async index(request: Request, response: Response) {
        const { page = 1, limit = 10 } = request.query;
        const offset = page * limit - limit;

        const ongs = await database('ongs')
            .select('*')
            .limit(limit)
            .offset(offset);

        return response.json({ data: ongs, page, limit, offset });
    }

    public async store(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            city,
            uf
        } = request.body as StoreBodyData;

        const isEmailAlreadyRegistered = await database('ongs')
            .select('*')
            .where('email', email)
            .first();

        if (isEmailAlreadyRegistered) {
            return response.status(400).json({
                code: 'error/email-already-exists',
                message: 'E-mail already registered in the system'
            });
        }

        const [id] = await database('ongs').insert({
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.status(201).json({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    }
}

export default new OngController();

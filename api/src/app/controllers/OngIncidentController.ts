import { Request, Response } from 'express';
import database from '../../database';

class OngIncidentController {
    async index(request: Request, response: Response) {
        const { ong_id } = request.params;

        const { page = 1, limit = 10 } = request.query;
        const offset = page * limit - limit;

        const ong = await database('ongs')
            .where('id', ong_id)
            .first();

        if (!ong) {
            return response.status(404).json({
                code: 'error/ong-not-found',
                message: 'Ong not found'
            });
        }

        const incidents = database('incidents')
            .select('*')
            .where('ong_id', ong_id)
            .limit(limit)
            .offset(offset);

        return response.json({
            data: incidents,
            page,
            limit,
            offset
        });
    }
}

export default new OngIncidentController();

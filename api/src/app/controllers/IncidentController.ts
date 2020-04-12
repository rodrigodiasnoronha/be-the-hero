import { Response, Request } from 'express';
import database from '../../database';

interface StoreBodyData {
    title: string;
    description: string;
    value: number;
    ong_id: number;
}

class IncidentController {
    async index(request: Request, response: Response) {
        const { page = 1, limit = 10 } = request.query;
        const offset = page * limit - limit;

        const [count] = await database('incidents').count();

        const incidents = await database('incidents')
            .innerJoin('ongs', 'ongs.id', 'incidents.ong_id')
            .select(['ongs.*', 'incidents.*'])
            .limit(limit)
            .offset(offset);

        return response.json({
            data: incidents,
            limit,
            page,
            offset,
            count: count[`count(*)`]
        });
    }

    async store(request: Request, response: Response) {
        const {
            title,
            description,
            value,
            ong_id
        } = request.body as StoreBodyData;

        const ong = await database('ongs')
            .where('id', ong_id)
            .first();

        if (!ong) {
            return response.status(404).json({
                error: 'error/ong-not-found',
                message: 'Ong logged not found'
            });
        }

        const [id] = await database('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.status(201).json({
            id,
            title,
            description,
            value,
            ong_id
        });
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const incident = await database('incidents')
            .select('*')
            .where('id', id)
            .first();

        if (!incident) {
            return response.status(404).json({
                code: 'error/incident-not-found',
                message: 'Incident not found'
            });
        }

        return response.json(incident);
    }

    async destroy(request: Request, response: Response) {
        const { id } = request.params;

        const incident = await database('incidents')
            .where('id', id)
            .first();

        if (!incident) {
            return response.status(404).json({
                code: 'error/incident-not-found',
                message: 'Incident not found'
            });
        }

        await database('incidents')
            .where('id', id)
            .first()
            .delete();

        return response.status(204).json();
    }
}

export default new IncidentController();

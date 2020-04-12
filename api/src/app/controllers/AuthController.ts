import { Request, Response } from 'express';
import database from '../../database';

class AuthController {
    async store(request: Request, response: Response) {
        const { ong_id } = request.body;

        if (!ong_id) {
            return response.status(400).json({
                code: 'error/validation-failed',
                message: 'Validation data failed'
            });
        }

        const ong = await database('ongs')
            .select('*')
            .where('id', ong_id)
            .first();

        if (!ong) {
            return response.status(404).json({
                code: 'error/ong-not-found',
                message: 'Ong not found'
            });
        }

        return response.json(ong);
    }
}

export default new AuthController();

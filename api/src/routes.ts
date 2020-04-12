import { Router } from 'express';
import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';
import OngIncidentController from './app/controllers/OngIncidentController';
import AuthController from './app/controllers/AuthController';
import * as Validators from './app/validators';

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ ok: true });
});

/**
 *
 * Auth routes
 *
 */

/**
 *
 * Ong Routes
 *
 */

routes.route('/login').post(AuthController.store);

routes
    .route('/ongs')
    .post(Validators.createOngValidator, OngController.store)
    .get(OngController.index);

routes.route('/ongs/:ong_id/incidents').get(OngIncidentController.index);

/**
 *
 * Incidents routes
 *
 */

routes
    .route('/incidents')
    .get(IncidentController.index)
    .post(Validators.createIncidentValidator, IncidentController.store);

routes
    .route('/incidents/:id')
    .get(IncidentController.show)
    .delete(IncidentController.destroy);

export default routes;

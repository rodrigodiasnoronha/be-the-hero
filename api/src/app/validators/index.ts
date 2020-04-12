import { Segments, Joi, celebrate } from 'celebrate';

/**
 *
 * Quando for usar o celebrate
 *
 * Você precisa importar o erros dentro do arquivo App.ts
 *
 * Necessário adicionar depois da rotas em App.ts o middleware
 *
 * server.use(errors)
 *
 */

export const createIncidentValidator = celebrate({
    [Segments.BODY]: {
        title: Joi.string().required(),
        description: Joi.string().required()
    }
});

export const createOngValidator = celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string()
            .email()
            .required(),
        whatsapp: Joi.number().required(),
        city: Joi.string(),
        uf: Joi.string()
    }
});

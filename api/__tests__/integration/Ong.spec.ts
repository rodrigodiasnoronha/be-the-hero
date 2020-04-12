import { agent } from 'supertest';
import server from '../../src/App';
import database from '../../src/database/index';

const api = agent(server);

beforeEach(async () => {
    await database('ongs').truncate();
});

it('should fail to create an ong', async () => {
    // Parametros faltando no body  irão fazer este testes falharr
    const response = await api.post('/ongs').send({
        title: '',
        name: ''
    });

    expect(response.status).toBe(400);
});

it('should create an ong', async () => {
    const response = await api.post('/ongs').send({
        name: 'Ong in Brasília',
        email: 'ong@ong.com.br',
        whatsapp: 512323413,
        city: 'Brasília',
        uf: 'DF'
    });

    expect(response.status).toBe(201);
});

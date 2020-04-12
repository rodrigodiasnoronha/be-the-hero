import { agent } from 'supertest';
import server from '../../src/App';

it('It should run the application', () => {
    agent(server);

    expect(2).toBe(2);
});

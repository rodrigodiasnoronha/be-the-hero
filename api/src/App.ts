import express, { Express, json, urlencoded } from 'express';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate';

class App {
    public server: Express = express();

    constructor() {
        this.cors();
        this.middlewares();
        this.routes();
        this.server.use(errors());
    }

    private middlewares() {
        this.server.use(json());
        this.server.use(urlencoded({ extended: true }));
    }

    private routes() {
        this.server.use(routes);
    }

    private cors() {
        this.server.use(cors());
    }
}

export default new App().server;

import * as express from 'express';
import * as bodyParser from 'body-parser';
import Controller from "./interfaces/controller.interface";

class App {
    public app: express.Application;

    constructor(controllers: Controller[]) {
        this.app = express();

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    public listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }

    public loggerMiddleware(request: express.Request, response: express.Response, next) {
        console.log(`${request.method} ${request.path}`);
        next();
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(this.loggerMiddleware)
    }

    private initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
}

export default App;

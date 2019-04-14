import 'dotenv/config';
import App from './app';
import ApiUserController from "./controllers/apiUser.controller";
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App(
    [
        new ApiUserController(),
    ]
);

app.listen();

import 'dotenv/config';
import App from './app';
import ApiUserController from "./controllers/apiUser.controller";
import validateEnv from './utils/validateEnv';
import ContractController from "./controllers/contract.controller";

validateEnv();

const app = new App(
    [
        new ApiUserController(),
        new ContractController()
    ]
);

app.listen();

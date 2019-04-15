import * as express from 'express';
import {ApiUser} from "../models/apiUser.model";
import ApiUserService from "../services/apiUser.Service";
import {ApiKeys} from "../models/apiKey.model";
import * as fs from "fs";

class ApiUserController {
    public path = '/api-users';
    public router = express.Router();

    private apiUserService: ApiUserService = new ApiUserService();
    public apiKeys: ApiKeys;

    constructor() {
        this.intializeRoutes();
        this.apiKeys = this.getApiKeys(process.env.API_KEYS_FILENAME);
    }

    public intializeRoutes() {
        this.router.get(this.path + `/:id`, this.getApiUser);
        this.router.get(this.path + `/`, this.getAllApiUsers);
    }

    public getApiKeys(path: string): ApiKeys {
        var content = fs.readFileSync(`./`+ path, `UTF8`);
        return JSON.parse(content);
    }

    getApiUser = (req: express.Request, resp: express.Response) => {
        const apiu = this.apiUserService.findOne(this.apiKeys.data[0], req.params.id).then(function (response) {
            resp.send(response);
        })
    };

    getAllApiUsers = (req: express.Request, resp: express.Response) => {
        const apiu = this.apiUserService.findAll(this.apiKeys.data[0]).then(function (response) {
            resp.send(response);
        })
    };
}

export default ApiUserController;

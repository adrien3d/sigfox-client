import * as express from 'express';
import {ApiKeys} from "../models/apiKey.model";
import * as fs from "fs";
import ContractService from "../services/contract.service";

class ContractController {
    public path = '/contract-infos';
    public router = express.Router();

    private contractService: ContractService = new ContractService();
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
        const apiu = this.contractService.findOne(this.apiKeys.data[0], req.params.id).then(function (response) {
            resp.send(response);
        })
    };

    getAllApiUsers = (req: express.Request, resp: express.Response) => {
        const apiu = this.contractService.findAll(this.apiKeys.data[0]).then(function (response) {
            resp.send(response);
        })
    };
}

export default ContractController;

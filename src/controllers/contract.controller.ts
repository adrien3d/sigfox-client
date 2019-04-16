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
        this.router.get(this.path + `/:id`, this.getContract);
        this.router.get(this.path + `/`, this.getAllContracts);
        this.router.get(this.path + `/:jobId/status`, this.getJobStatus);
        this.router.get(this.path + `/:id/devices`, this.getDevices);
    }

    public getApiKeys(path: string): ApiKeys {
        var content = fs.readFileSync(`./`+ path, `UTF8`);
        return JSON.parse(content);
    }

    getContract = (req: express.Request, resp: express.Response) => {
        this.contractService.findOne(this.apiKeys.data[0], req.params.id).then(function (response) {
            resp.send(response);
        })
    };

    getAllContracts = (req: express.Request, resp: express.Response) => {
        this.contractService.findAll(this.apiKeys.data[0]).then(function (response) {
            resp.send(response);
        })
    };

    getJobStatus = (req: express.Request, resp: express.Response) => {
        this.contractService.jobStatus(this.apiKeys.data[0], req.params.jobId).then(function (response) {
            resp.send(response);
        })
    };

    getDevices = (req: express.Request, resp: express.Response) => {
        this.contractService.devices(this.apiKeys.data[0], req.params.id).then(function (response) {
            resp.send(response);
        })
    };
}

export default ContractController;

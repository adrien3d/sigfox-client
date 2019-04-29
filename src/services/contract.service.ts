import {ApiKey} from "../models/apiKey.model";
import {Contract, ContractJob} from "../models/contract.model";
import {Devices} from "../models/devices.model";
import logError from "../utils/utils";

const axios = require('axios');

class ContractService {
    constructor () {
    }

    public findOne(apiKey: ApiKey, id: string): Promise<Contract> {
        console.log('Find one api user');
        return axios.get('https://api.sigfox.com/v2/contract-infos/' + id, {
            auth: {
                username: apiKey.sigfoxKey,
                password: apiKey.sigfoxSecret
            }
        })
        .then(function (response: any) {
            return response.data;
        })
        .catch(function (error: any) {
            logError(error);
        });
    }

    public findAll(apiKey: ApiKey): Promise<Contract> {
        console.log('Find all api users');
        return axios.get('https://api.sigfox.com/v2/contract-infos/', {
            auth: {
                username: apiKey.sigfoxKey,
                password: apiKey.sigfoxSecret
            }
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error: any) {
            logError(error);
        });
    }

    public jobStatus(apiKey: ApiKey, jobId: string): Promise<ContractJob> {
        console.log('Find all api users');
        return axios.get('https://api.sigfox.com/v2/contract-infos/bulk/restart/' + jobId, {
            auth: {
                username: apiKey.sigfoxKey,
                password: apiKey.sigfoxSecret
            }
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error: any) {
            logError(error);
        });
    }

    public devices(apiKey: ApiKey, id: string): Promise<Devices> {
        console.log('Find all api users');
        return axios.get('https://api.sigfox.com/v2/contract-infos/' + id + '/devices', {
            auth: {
                username: apiKey.sigfoxKey,
                password: apiKey.sigfoxSecret
            }
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error: any) {
            logError(error);
        });
    }
}

export default ContractService;

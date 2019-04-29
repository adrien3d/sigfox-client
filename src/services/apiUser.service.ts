import {ApiUser, ApiUsers} from "../models/apiUser.model";
import {ApiKey} from "../models/apiKey.model";
import logError from "../utils/utils";

const axios = require('axios');

class ApiUserService {
    constructor () {
    }

    public findOne(apiKey: ApiKey, id: string): Promise<ApiUser> {
        console.log('Find one api user');
        return axios.get('https://api.sigfox.com/v2/api-users/' + id, {
            auth: {
                username: apiKey.sigfoxKey,
                password: apiKey.sigfoxSecret
            }
        })
        .then(function (response: any) {
            return response.data;
        })
        .catch(function (error: any) {
            return logError(error);
        });
    }

    public findAll(apiKey: ApiKey): Promise<ApiUsers> {
        console.log('Find all api users');
        return axios.get('https://api.sigfox.com/v2/api-users/', {
            auth: {
                username: apiKey.sigfoxKey,
                password: apiKey.sigfoxSecret
            }
        })
        .then(function (response) {
            /*var apiu : ApiUsers  = {
                data: response.data.data,
                paging: response.data.paging
            };
            return apiu;*/
            return response.data;
        })
        .catch(function (error: any) {
            return logError(error);
        });
    }
}

export default ApiUserService;

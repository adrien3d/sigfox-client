import {ApiUser, ApiUsers} from "../models/apiUser.model";

const axios = require('axios');

class ApiUserService {
    public findOne(id: string): Promise<ApiUser | undefined> {
        console.log('Find one api user');
        return axios.get('https://api.sigfox.com/v2/api-users/' + id, {
            auth: {
                username: ``,
                password: ``
            }
        })
        .then(function (response: any) {
            //console.log(response.data);
            response.data.map((re: any) => {
                    console.log(re);
                }
            )
        })
        .catch(function (error: any) {
            console.log(error.response);
        });
    }

    public findAll(): Promise<ApiUsers> {
        console.log('Find all api users');
        return axios.get('https://api.sigfox.com/v2/api-users/', {
            auth: {
                username: ``,
                password: ``
            }
        })
        .then(function (response: any) {
            //console.log(response.data);
            response.data.map((re: any) => {
                    console.log(re);
                }
            )
        })
        .catch(function (error: any) {
            console.log(error.response);
        });
    }
}

export default ApiUserService;

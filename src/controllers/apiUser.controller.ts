import * as express from 'express';
import {ApiUser} from "../models/apiUser.model";
import ApiUserService from "../services/apiUser.Service";

class ApiUserController {
    public path = '/api-users';
    public router = express.Router();

    private apiUsers: ApiUser[] = [
        {
            name: 'API User 1',
            timezone: '',
            group: [],
            creationTime: 1,
            id: '',
            accessToken: '',
            profiles: []
        }
    ];
    private apiUserService: ApiUserService;

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllApiUsers);
        this.router.post(this.path, this.createApiUser);
    }

    getAllApiUsers = (request: express.Request, response: express.Response) => {
        //response.send(this.apiUsers);
        this.apiUserService.findAll();
    };

    createApiUser = (request: express.Request, response: express.Response) => {
        const apiUser: ApiUser = request.body;
        this.apiUsers.push(apiUser);
        response.send(apiUser);
    };
}

export default ApiUserController;

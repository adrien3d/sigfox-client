import {Group, IdName, NextURL} from "./common.model";

interface ApiUser {
    name: string;
    timezone: string;
    group: Group[];
    creationTime: number;
    id: string;
    accessToken: string;
    profiles: IdName[];
}

interface ApiUsers {
    data: ApiUser[];
    paging: NextURL;
}

export {ApiUser, ApiUsers}

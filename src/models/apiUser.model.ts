import {Group, IdName, NextURL} from "./common.model";

export interface ApiUser {
    name: string;
    timezone: string;
    group: Group[];
    creationTime: number;
    id: string;
    accessToken: string;
    profiles: IdName[];
}

export interface ApiUsers {
    data: ApiUser[];
    paging: NextURL;
}

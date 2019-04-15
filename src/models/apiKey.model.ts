interface ApiKey {
    name: string;
    sigfoxId: string;
    sigfoxKey: string;
    sigfoxSecret: string;
    deviceTypeId: string;
}

interface ApiKeys {
    data: ApiKey[];
}

export {ApiKey, ApiKeys}

import {Group, IdName} from "./common.model";

export interface Parameters {
    duration?: number;
    nb?: number;
    level?: number;
}

export interface Option {
    id: string;
    parameters: Parameters;
}

export interface Contract {
    id: string;
    name: string;
    group: Group;
    maxUplinkFrames: number;
    maxDownlinkFrames: number;
    maxTokens: number;
    activationEndTime: number;
    communicationEndTime: number;
    bidir: boolean;
    highPriorityDownlink: boolean;
    automaticRenewal: boolean;
    renewalDuration: number;
    options: Option[];
    contractId: string;
    userId: string;
    order: IdName;
    pricingModel: number;
    createdBy: string;
    lastEditionTime: number;
    lastEditedBy: string;
    startTime: number;
    timezone: string;
    subscriptionPlan: number;
    tokenDuration: number;
    blacklistedTerritories: Group[];
    tokensInUse: number;
    tokensUsed: number;
    nextContractInfo: IdName;
}

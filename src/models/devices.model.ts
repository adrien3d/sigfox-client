import {Group, IdKey, IdName, NextURL} from "./common.model";

export interface Location {
    lat: number;
    lng: number;
}

export interface LastComputedLocation {
    lat: number;
    lng: number;
    radius: number;
    source: number;
}

export interface Token {
    state: number;
    detailMessage: string;
    end: number;
    unsubscriptionTime: number;
    freeMessages: number;
    freeMessagesSent: number;
}

export interface Datum {
    id: string;
    name: string;
    sequenceNumber: number;
    trashSequenceNumber: number;
    lastCom: number;
    pac: string;
    location: Location;
    lastComputedLocation: LastComputedLocation;
    group: Group;
    deviceType: IdName;
    lqi: number;
    activationTime: number;
    contract: IdName;
    token: Token;
    createdBy: string;
    lastEditionTime: number;
    lastEditedBy: string;
    unsubscriptionTime: number;
    creationTime: number;
    modemCertificate: IdKey;
    productCertificate: IdKey;
    state: number;
    comState: number;
    automaticRenewal: boolean;
    automaticRenewalStatus: number;
    activable: boolean;
    prototype: boolean;
}

export interface Devices {
    data: Datum[];
    paging: NextURL;
}

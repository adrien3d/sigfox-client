interface Group {
    id: string;
    name: string;
    type: string;
    level: number;
}

interface IdName {
    id: string;
    name: string;
}

interface NextURL {
    next: string;
}

export {Group, IdName, NextURL}

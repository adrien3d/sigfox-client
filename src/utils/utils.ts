function logError (error: any): Promise<Error> {
    console.log(error.response);
    switch (error.response.status) {
        case 403:
            return new error("Access denied: Check provided credentials");
        case 404:
            return new error("Ressource not found: Unknown ID");
        default:
            return new error("Invalid request format");
    }
}

export default logError;

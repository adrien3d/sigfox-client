import {
    cleanEnv, port, str,
} from 'envalid';

function validateEnv() {
    cleanEnv(process.env, {
        PORT: port(),
        API_KEYS_FILENAME: str(),
    });
}

export default validateEnv;

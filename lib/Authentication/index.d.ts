import { AuthenticationRequestBody, environment } from '../Types';
export declare class Authentication {
    private environment;
    constructor(environment: environment);
    generateToken(requestPayload: AuthenticationRequestBody): Promise<any>;
}

import { ResponseHeaders } from "../";
export interface AuthenticationRequestBody {
    grant_type: string;
    username: string;
    password: string;
}
export interface AuthenticationSuccessResponseBody extends ResponseHeaders {
    data: {
        access_token: string;
        token_type: string;
        username: string;
        FirstName: string;
        Id: string;
        ".issued": Date;
        ".expires": Date;
    };
}
export interface AuthenticationErrorResponseBody {
    error: string;
}

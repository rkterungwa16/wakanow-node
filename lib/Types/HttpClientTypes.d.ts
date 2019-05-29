export interface HttpClientConfig {
    protocol: string;
    hostname: string;
    path: string;
    method: "get" | "post" | "put" | "delete" | "patch";
    requestPayload?: object;
}
export interface RequestHeaders {
    "Content-Type": string;
    Authorization: string;
}
export interface ResponseHeaders {
    headers: {
        "content-length"?: string;
        "content-type"?: string;
    };
    statusCode: number;
}
export declare type environment = "development" | "production";
export interface ErrorResponse extends ResponseHeaders {
    body: Error;
}

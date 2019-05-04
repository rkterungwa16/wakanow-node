export interface HttpClientConfig {
  protocol: string;
  hostname: string;
  path: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  requestPayload?: object;
};

export interface Headers {
  'Content-Type': string;
  Authorization: string;
}

// export interface HttpClientInterface {
//   apiToken: string;
//   options: HttpClientConfig;
//   sendRequest(): Promise<void>;
//   protected generateRequestHeaders(): Headers;
// }

import {
  AuthenticationRequestBody
} from '../Types/';

class WakanowAuthentication {
  authenticationDetails: AuthenticationRequestBody;
  constructor(authenticationDetails: AuthenticationRequestBody) {
    this.authenticationDetails = authenticationDetails;
  }

  generateToken() {

  }
}

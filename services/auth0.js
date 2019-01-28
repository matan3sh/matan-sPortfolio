import auth0 from 'auth0-js';
import Cookies from 'js-cookie';

class Auth {

  constructor() {
    this.auth0 = new auth0.WebAuth({
        domain: 'matansh.auth0.com',
        clientID: 'hlc2ER9yYUCoeQ8a9hL51ro7KxnhbgK3',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile'
      });
      this.login = this.login.bind(this);
      this.handleAuthentication = this.handleAuthentication.bind(this);
      this.logout = this.logout.bind(this);
      this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(err);
        }
      });
    })
    
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

    Cookies.set('user',authResult.idTokenPayload);
    Cookies.set('jwt',authResult.idToken);
    Cookies.set('expiresAt',expiresAt);

  }

  logout() {
    Cookies.remove('user');
    Cookies.remove('jwt');
    Cookies.remove('expiresAt');

    this.auth0.logout({
      returnTo: '',
      clientID: 'hlc2ER9yYUCoeQ8a9hL51ro7KxnhbgK3'
    })
  }

  login() {
    this.auth0.authorize();
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = Cookies.getJSON('expiresAt');
    return new Date().getTime() < expiresAt;
  }
}

const auth0Client = new Auth();

export default auth0Client;
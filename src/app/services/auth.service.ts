export class AuthService {

  isAuth = false;
  isAdmin = false;

  signIn(isAdmin: boolean = false) {
    this.isAuth = true;
    this.isAdmin = isAdmin;
  }

  signOut() {
    this.isAuth = false;
  }

}

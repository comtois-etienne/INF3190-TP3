export class AuthService {

  isAuth = false;
  isAdmin = false;

  signIn(username: String) {
    if (username == "admin") {
      this.isAuth = true;
      this.isAdmin = true;
    } else {
      this.isAuth = true;
    }

  }

  signOut() {
    this.isAuth = false;
    this.isAdmin = false;
  }

}

{
  class User {
    githubToken: string;
    jwtToken: string;
  }

  interface AuthStrategy {
    auth(user: User): boolean;
  }

  class Auth {
    constructor(private strategy: AuthStrategy) {}

    setStrategy(strategy: AuthStrategy) {
      this.strategy = strategy;
    }

    public authUser(user: User): boolean {
      return this.strategy.auth(user);
    }
  }

  class JWTStrategy implements AuthStrategy {
    auth(user: User): boolean {
      return !!user.jwtToken;
    }
  }

  class GithubStrategy implements AuthStrategy {
    auth(user: User): boolean {
      return !!user.githubToken;
    }
  }

  const user = new User();
  user.jwtToken = 'token';

  const auth = new Auth(new JWTStrategy());
  auth.authUser(user); // true

  auth.setStrategy(new GithubStrategy());
  auth.authUser(user); // false
}

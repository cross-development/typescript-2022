{
  class UserBuilder {
    name: string;

    // If we set UserBuilder as the return type,
    // we will have type collisions in the new object.
    setName(name: string): this {
      this.name = name;

      return this;
    }

    isAdmin(): this is AdminBuilder {
      return this instanceof AdminBuilder;
    }
  }

  class AdminBuilder extends UserBuilder {
    // if we don't have any properties the type guard
    // isAdmin will be UserBuilder | AdminBuilder.
    // We should set some properties if we want to separate our types
    roles: string[];
  }

  const res = new UserBuilder().setName("Paul");

  // res2 type will be UserBuilder in case of return type
  // UserBuilder inside setName method
  const res2 = new AdminBuilder().setName("Paul");

  let user: UserBuilder | AdminBuilder = new UserBuilder();

  if (user.isAdmin()) {
    console.log("user", user);
  } else {
    console.log("user", user);
  }
}

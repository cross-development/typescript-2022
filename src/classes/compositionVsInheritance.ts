{
  // Ex 1
  class User {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  // Inheritance
  // Not recommended
  //   class Users extends Array<User> {
  //     searchByName(name: string) {
  //       return this.filter((u) => u.name === name);
  //     }
  //   }

  // Composition
  class Users {
    users: User[];

    push(user: User) {
      this.users.push(user);
    }
  }

  // Ex 2
  class Payment {
    date: Date;
  }

  // Inheritance
  // Not recommended
  //   class UserWithPayment extends Payment {
  //     name: string;
  //   }

  // Composition
  class UserWithPayment {
    user: User;
    payment: Payment;

    constructor(user: User, payment: Payment) {
      this.payment = payment;
      this.user = user;
    }
  }
}

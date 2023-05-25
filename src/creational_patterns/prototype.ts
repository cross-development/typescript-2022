{
  interface Prototype<T> {
    clone(): T;
  }

  class UserHistory implements Prototype<UserHistory> {
    createdAt: Date;

    constructor(public email: string, public name: string) {
      this.createdAt = new Date();
    }

    clone(): UserHistory {
      const target = new UserHistory(this.email, this.name);
      target.createdAt = this.createdAt;

      return target;
    }
  }

  const user1 = new UserHistory('test@test.ua', 'Vasia');
  console.log('user', user1);

  const user2 = user1.clone();
  user2.email = 'test2@test.ua';
  console.log('user2', user2);
  console.log('user1', user1);
}

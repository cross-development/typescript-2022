{
  const user = {
    firstName: "John",
    surname: "Doe",
    city: "New York",
    age: 33,
    skills: {
      dev: true,
      devops: true,
    },
  };

  const getFullName = (userEntity: {
    firstName: string;
    surname: string;
  }): string => {
    return `${userEntity.firstName} ${userEntity.surname}`;
  };

  console.log(getFullName(user));

  // Test
  const info: {
    officeId: number;
    isOpened: boolean;
    contacts: {
      phone: string;
      email: string;
      address: {
        city: string;
      };
    };
  } = {
    officeId: 12,
    isOpened: true,
    contacts: {
      phone: "+38050100000",
      email: "test@test.ua",
      address: {
        city: "New York",
      },
    },
  };

  console.log("info", info);
}

interface Role {
  name: string;
}

interface Permission {
  endDate: Date;
}

interface User {
  name: string;
  roles: Role[];
  permission: Permission;
}

const user: User = {
  name: 'Vasya',
  roles: [],
  permission: {
    endDate: new Date(),
  },
};

const nameUser = user['name'];
const roleName = 'roles';

type RolesType = User['roles'];
type RolesType2 = User[typeof roleName];

type RoleType = User['roles'][number]; // type Role - get type of the one element of the array
type DateType = User['permission']['endDate']; // type Date - get certain type of the property of the object

const roles = ['admin', 'user', 'super-user'] as const;
type RoleTypes = typeof roles[number]; // get union type of the all elements

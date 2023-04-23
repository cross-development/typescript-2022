{
  type Modifier = 'read' | 'update' | 'create';

  type UserRoles = {
    customers?: Modifier;
    projects?: Modifier;
    adminPanel: Modifier;
  };

  type ModifierToAccess<T> = {
    [Property in keyof T]: boolean;
    // [Property in keyof T]+?: boolean; // "+" mark all props as an optional
    // [Property in keyof T]-?: boolean; // "-" mark all props as a required
    // +readonly [Property in keyof T]+?: boolean; // "+readonly and +" marks all props as a readonly and optional
    // +readonly [Property in keyof T]-?: boolean; // "+readonly and -" marks all props as a readonly and required
    // [Property in keyof T as `canAccess${Capitalize<string & Property>}`]?: boolean; // rename properties to canAccess...
  };

  type UserAccess = ModifierToAccess<UserRoles>;
}

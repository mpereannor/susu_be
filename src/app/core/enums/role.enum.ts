import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  ADMIN = 'ADMIN',
  AGENT = 'AGENT',
  USER = 'USER',
}

registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'Role of the User',
  valuesMap: { USER: { description: 'The default role' } },
});

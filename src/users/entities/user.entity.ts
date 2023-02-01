import { UserRole } from '@app/app/core/enums/role.enum';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id!: string;
  @Field()
  firstname!: string;

  @Field()
  lastname!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field()
  active: boolean;

  @Field(() => UserRole)
  role: UserRole;
}

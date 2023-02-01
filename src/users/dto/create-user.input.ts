import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { Role } from '@prisma/client';

@InputType()
export class CreateUserInput {
  @Field(() => ID, { nullable: false })
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
  @Field(() => Role, {
    description: 'User role',
  })
  role?: Role;
}

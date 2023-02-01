import { Role } from '@prisma/client';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  firstname?: string;
  @Field()
  lastname?: string;
  @Field()
  email?: string;
  @Field()
  password?: string;
  @Field()
  active?: boolean;
  @Field()
  role?: Role;
}

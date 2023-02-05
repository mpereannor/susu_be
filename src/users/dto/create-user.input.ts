import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name!: string;
  @Field()
  lastname!: string;
  @Field()
  email!: string;
  @Field()
  active!: boolean;
}

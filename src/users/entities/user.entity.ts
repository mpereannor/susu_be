import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id!: string;
  @Field()
  name!: string;
  @Field()
  lastname!: string;
  @Field()
  email!: string;
  @Field()
  active!: boolean;
}

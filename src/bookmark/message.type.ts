import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteMessageType {
  @Field()
  message: string;
}

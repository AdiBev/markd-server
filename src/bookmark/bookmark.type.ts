import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Bookmark')
export class BookmarkType {
  @Field(type => ID)
  id: string;

  @Field()
  url: string;
}

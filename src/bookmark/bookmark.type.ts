import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Bookmark')
export class BookmarkType {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  url: string;

  @Field()
  folder: string;
}

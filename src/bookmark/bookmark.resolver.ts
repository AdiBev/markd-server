import { Query, Resolver } from '@nestjs/graphql';
import { BookmarkType } from './bookmark.type';

@Resolver(of => BookmarkType)
export class BookmarkResolver {
  @Query(returns => BookmarkType)
  bookmark() {
    return {
      id: 'gdfv',
      url: 'test url',
    };
  }
}

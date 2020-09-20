import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateBookmarkInput } from './bookmark.input';
import { BookmarkService } from './bookmark.service';
import { BookmarkType } from './bookmark.type';
import { DeleteMessageType } from './message.type';

@Resolver(of => BookmarkType)
export class BookmarkResolver {
  constructor(private bookmarkService: BookmarkService) {}

  @Query(returns => BookmarkType)
  bookmark(@Args('id') id: string) {
    return this.bookmarkService.getBookmark(id);
  }

  @Query(returns => [BookmarkType])
  allBookmarks() {
    return this.bookmarkService.getBookmarks();
  }

  @Mutation(returns => BookmarkType)
  createBookmark(
    @Args('createBookmarkInput') createBookmarkInput: CreateBookmarkInput,
  ) {
    return this.bookmarkService.createBookmark(createBookmarkInput);
  }

  @Mutation(returns => BookmarkType)
  updateBookmark(
    @Args('id') id: string,
    @Args('updateBookmarkInput') updateBookmarkInput: CreateBookmarkInput,
  ) {
    return this.bookmarkService.updateBookmark(id, updateBookmarkInput);
  }

  @Mutation(returns => DeleteMessageType)
  removeBookmark(@Args('id') id: string) {
    return this.bookmarkService.removeBookmark(id);
  }
}

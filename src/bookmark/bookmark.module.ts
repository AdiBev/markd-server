import { Module } from '@nestjs/common';
import { BookmarkResolver } from './bookmark.resolver';

@Module({
  providers: [BookmarkResolver],
})
export class BookmarkModule {}

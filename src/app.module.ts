import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [GraphQLModule.forRoot({ autoSchemaFile: true }), BookmarkModule],
})
export class AppModule {}

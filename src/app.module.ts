import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BookmarkModule } from './bookmark/bookmark.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from './bookmark/bookmark.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
        'mongodb+srv://adi001:LXLcYkUdgaJfVcQr@bookmark.tzlt0.mongodb.net/<dbname>?retryWrites=true&w=majority',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Bookmark],
    }),
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    BookmarkModule,
  ],
})
export class AppModule {}

//adi001
//LXLcYkUdgaJfVcQr

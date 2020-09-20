import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bookmark } from './bookmark.entity';
import { v4 as uuid } from 'uuid';
import { CreateBookmarkInput } from './bookmark.input';
import { DeleteMessageType } from './message.type';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectRepository(Bookmark)
    private bookmarkRepository: Repository<Bookmark>,
  ) {}

  async createBookmark(
    createBookmarkInput: CreateBookmarkInput,
  ): Promise<Bookmark> {
    const { name, url, folder } = createBookmarkInput;
    const bookmark = this.bookmarkRepository.create({
      id: uuid(),
      name,
      url,
      folder,
    });

    return this.bookmarkRepository.save(bookmark);
  }

  async getBookmark(id: string): Promise<Bookmark> {
    return this.bookmarkRepository.findOne({ id });
  }

  async getBookmarks(): Promise<Bookmark[]> {
    return this.bookmarkRepository.find();
  }

  async updateBookmark(
    id: string,
    bookmarkInput: CreateBookmarkInput,
  ): Promise<Bookmark> {
    const { name, url, folder } = bookmarkInput;
    const bookmark = await this.bookmarkRepository.findOne({ id });
    bookmark.name = name;
    bookmark.folder = folder;
    bookmark.url = url;
    return this.bookmarkRepository.save(bookmark);
  }

  async removeBookmark(id: string): Promise<DeleteMessageType> {
    try {
      const bookmark = await this.bookmarkRepository.findOne({ id });
      await this.bookmarkRepository.remove(bookmark);
      return { message: `bookmark-${id} removed!` };
    } catch (err) {
      return { message: `${id} doesn't exist` };
    }
  }
}

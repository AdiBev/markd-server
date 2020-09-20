import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateBookmarkInput {
  @MinLength(3)
  @Field()
  name: string;

  @MinLength(3)
  @Field()
  folder: string;

  @IsNotEmpty()
  @Field()
  url: string;
}

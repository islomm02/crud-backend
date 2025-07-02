import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
  @ApiProperty({ example: 'Harry Potter' })
  name: string;
  @ApiProperty({ example: 'Description about book' })
  description: string;
  @ApiProperty({ example: 'https:books/book-url/sasja78892:hhtwo' })
  image_url: string;
  @ApiProperty({ example: 'Author of book' })
  author: string;
  @ApiProperty({ example: 123 })
  price: number;
}

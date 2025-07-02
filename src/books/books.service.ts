import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class BooksService {

  constructor(private readonly prisma: PrismaService){}

  @ApiProperty()
  async create(createBookDto: CreateBookDto) {
    return this.prisma.books.create({data: createBookDto})
  }

  async findAll() {
    return this.prisma.books.findMany()
  }

  async findOne(id: number) {
    return this.prisma.books.findFirst({where: {id}});
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    return this.prisma.books.update({where: {id}, data: updateBookDto});
  }

  async remove(id: number) {
    return this.prisma.books.delete({where: {id}});
  }
}

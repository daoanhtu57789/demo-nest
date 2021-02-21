import { UpdateCatDto } from './dto/update-cat.dto';
import { CreateCatDto } from './dto/create-cat.dto';
import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  //Khởi tạo để sử dụng được CatsService
  constructor(private catsService: CatsService) {} 

  @Post()
  @Header('Cache-Control', 'none')
  //body truyền vào sẽ có các trường như trong CreateCatDto
  async create(@Body() createCatDto: CreateCatDto){
    this.catsService.create(createCatDto) 
  }
  
  @Get()
  //@Redirect('https://nestjs.com', 301)//chuyển hướng
  @HttpCode(200) // trả về status code
  //Hàm async trả về một promise
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  // @Get('anhtu')
  // //có thể dùng res để trả về với thư viện Response của express
  // findOption(@Res() res: Response) {
  //   //đây là hàm void nên ko có kiểu trả về
  //   res.status(HttpStatus.OK).json([]);
  // }

  @Put(':id')
  //Truyền id và body để update 
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} cat`;
  }
}

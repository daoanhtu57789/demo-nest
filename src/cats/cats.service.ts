import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
//Một provider thường đứng sau Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    //interface Cat đại diện cho kiểu dữ liêu của TS
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    let catcat : Cat = {
      name: 'King',
      age: 2,
      breed: 'mela'
    } 
    return [catcat];
  }
}
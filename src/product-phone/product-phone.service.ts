/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateProductPhoneDto } from './dto/create-product-phone.dto';
import { UpdateProductPhoneDto } from './dto/update-product-phone.dto';

@Injectable()
export class ProductPhoneService {
  create(createProductPhoneDto: CreateProductPhoneDto) {
    return 'This action adds a new productPhone';
  }

  findAll() {
    return [];
  }

  findOne(id: number) {
    return `This action returns a #${id} productPhone`;
  }

  update(id: number, updateProductPhoneDto: UpdateProductPhoneDto) {
    return `This action updates a #${id} productPhone`;
  }

  remove(id: number) {
    return `This action removes a #${id} productPhone`;
  }
}

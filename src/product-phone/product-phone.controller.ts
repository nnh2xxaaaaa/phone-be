/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,

} from '@nestjs/common';
import { ProductPhoneService } from './product-phone.service';
import { InfoProduct } from 'src/model/info-product.model';
import { CreateProductPhoneDto } from './dto/create-product-phone.dto';

@Controller('product-phone')
export class ProductPhoneController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly productPhoneService: ProductPhoneService) { }


  @Get()
  findAll() {
    return this.productPhoneService.getAll();
  }

  @Post()
  createProduct(@Body() createProductPhoneDto: CreateProductPhoneDto) {
    return this.productPhoneService.createProduct(createProductPhoneDto);
  }

}

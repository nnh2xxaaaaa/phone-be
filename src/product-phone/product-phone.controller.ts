import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductPhoneService } from './product-phone.service';
import { CreateProductPhoneDto } from './dto/create-product-phone.dto';
import { UpdateProductPhoneDto } from './dto/update-product-phone.dto';

@Controller('product-phone')
export class ProductPhoneController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly productPhoneService: ProductPhoneService) { }

  @Post()
  create(@Body() createProductPhoneDto: CreateProductPhoneDto) {
    return this.productPhoneService.create(createProductPhoneDto);
  }

  @Get()
  findAll() {
    return this.productPhoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPhoneService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductPhoneDto: UpdateProductPhoneDto,
  ) {
    return this.productPhoneService.update(+id, updateProductPhoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productPhoneService.remove(+id);
  }
}

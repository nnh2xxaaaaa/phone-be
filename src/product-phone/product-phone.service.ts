/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateProductPhoneDto } from './dto/create-product-phone.dto';
import { UpdateProductPhoneDto } from './dto/update-product-phone.dto';
import { Product } from 'src/model/product.model';
import { InfoProduct } from 'src/model/info-product.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductPhoneService {
  create(createProductPhoneDto: CreateProductPhoneDto) {
    return 'This action adds a new productPhone';
  }

  private product: InfoProduct[] = [];

  getAll(): InfoProduct[] {
    return this.product;
  }

  createProduct(createProductPhoneDto: CreateProductPhoneDto): InfoProduct {

    const create = createProductPhoneDto

    if (createProductPhoneDto) {
      const createproduct: InfoProduct = {
        id: uuidv4(),
        name: create.name,
        cash: create.cash,
        display: create.display,
        inch: create.inch,
        ram: create.ram,
        memory: create.memory,
        img: create.img,
        operating_system: create.operating_system,
        installment: create.installment,
        type: create.type,
      };

      this.product.push(createproduct);

      return createproduct;

    }

  }
}

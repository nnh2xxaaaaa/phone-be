import { PartialType } from '@nestjs/mapped-types';
import { CreateProductPhoneDto } from './create-product-phone.dto';

export class UpdateProductPhoneDto extends PartialType(CreateProductPhoneDto) {}

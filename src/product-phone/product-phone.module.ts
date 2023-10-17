import { Module } from '@nestjs/common';
import { ProductPhoneService } from './product-phone.service';
import { ProductPhoneController } from './product-phone.controller';

@Module({
  controllers: [ProductPhoneController],
  providers: [ProductPhoneService],
})
export class ProductPhoneModule {}

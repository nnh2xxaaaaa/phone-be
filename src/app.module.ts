import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductPhoneModule } from './product-phone/product-phone.module';

@Module({
  imports: [ProductPhoneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

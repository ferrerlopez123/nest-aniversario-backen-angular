import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Seller, SellerSchema } from './entities/seller.entity';

@Module({
  controllers: [SellerController],
  providers: [SellerService],
  imports: [ 
    MongooseModule.forFeature([
    {
      name: Seller.name,
      schema: SellerSchema
    }])
  ]
})
export class SellerModule {}

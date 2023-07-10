import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TicketModule } from './ticket/ticket.module';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    MongooseModule.forRoot(process.env.MONGO_URI,{
      dbName: process.env.MONGO_DB_NAME
    }),
    TicketModule,
    SellerModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
  }
}

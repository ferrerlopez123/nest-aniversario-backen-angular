import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Seller } from './entities/seller.entity';
import { Model } from 'mongoose';

@Injectable()
export class SellerService {
  
  constructor(@InjectModel(Seller.name) 
  private sellerModel: Model<Seller>) {}


  async create(createSellerDto: CreateSellerDto) {
    try {
      const newSeller = new this.sellerModel(createSellerDto);
      await newSeller.save();
      return newSeller.toJSON();
    } catch (error) {
      if(error.code === 11000) {
        throw new BadRequestException(`${createSellerDto.name} ya existe!`);
      }
      throw new InternalServerErrorException('Algo salio mal');
    }
  }

  async findAll() {
    try {
      return await this.sellerModel.find();
    } catch (error) {
      throw new InternalServerErrorException('Algo salio mal');
    }
  
    }
  }

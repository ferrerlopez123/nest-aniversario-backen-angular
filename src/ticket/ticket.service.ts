import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket } from './entities/ticket.entity';
import { Model } from 'mongoose';

@Injectable()
export class TicketService {

  constructor(@InjectModel(Ticket.name) 
    private ticketModel: Model<Ticket>) {

  }

  async create(createTicketDto: CreateTicketDto) {
    try {
      const newTicket = new this.ticketModel(createTicketDto);
      await newTicket.save();
      return newTicket.toJSON();
    } catch (error) {
      throw new InternalServerErrorException('Algo salio mal');
    }
  }

 async  findAll() {
  try {
    return await this.ticketModel.find();
  } catch (error) {
    throw new InternalServerErrorException('Algo salio mal');
  }

  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    try {
      return await this.ticketModel.updateOne({"_id": id},{$set: updateTicketDto});
    } catch (error) {
      throw new InternalServerErrorException('Algo salio mal');
}
  }

 async remove(id: string) {   
    try {
      return await this.ticketModel.deleteOne({"_id": id});
    }
     catch (error) {
      throw new InternalServerErrorException('Algo salio mal');
    }
}

}
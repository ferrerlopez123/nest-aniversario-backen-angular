import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Ticket {

    id?: string;

    @Prop({required: true})
    name:string;

    @Prop({required: true})
    surnames: string;

    @Prop({required: true, type:[Object]})
    package:Paquete[];

    @Prop({required: true})
    soldDate: string;

    @Prop({required: true})
    seller: string;

    @Prop({required: true})
    status:string;

    @Prop({required: true})
    total: number;

    @Prop({required: true})
    paid: number;

    @Prop()
    seat: string;

}



export class Paquete {
    name: string;
    price:number;
  }

export const TicketSchema  = SchemaFactory.createForClass(Ticket);
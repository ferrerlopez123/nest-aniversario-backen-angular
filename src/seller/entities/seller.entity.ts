import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Seller {
    
    @Prop({unique: true,required: true})
    name:string
}

export const SellerSchema  = SchemaFactory.createForClass(Seller);
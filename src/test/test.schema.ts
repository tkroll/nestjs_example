import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TestDocument = Test & Document;

@Schema()
export class Test {
    @Prop()
    symbol: string;

    @Prop()
    price: number;
}

export const TestSchema = SchemaFactory.createForClass(Test);

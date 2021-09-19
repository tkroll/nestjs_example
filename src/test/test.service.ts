import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test, TestDocument } from './test.schema';

@Injectable()
export class TestService {
  constructor(@InjectModel(Test.name) private testModel: Model<TestDocument>) {}

  create(createTestDto: CreateTestDto): Promise<Test> {
    const createTest = new this.testModel(createTestDto);
    return createTest.save();
  }

  findAll() {
    return this.testModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}

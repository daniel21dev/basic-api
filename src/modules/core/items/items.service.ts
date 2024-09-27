import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from '@/modules/shared/prisma/prisma.service';

@Injectable()
export class ItemsService extends PrismaService{
  create(createItemDto: CreateItemDto) {
    return this.item.create({
      data: createItemDto
    })
  }

  findAll() {
    return this.item.findMany()
  }

  findOne(id: string) {
    return this.item.findUnique({where:{id}})
  }

  update(id: string, updateItemDto: UpdateItemDto) {
    return this.item.update({
      where: {id},
      data: updateItemDto
    })
  }

  remove(id: string) {
    return this.item.delete({where:{id}})
  }
}

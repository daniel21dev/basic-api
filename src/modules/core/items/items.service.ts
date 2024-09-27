import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from '@/modules/shared/prisma/prisma.service';
import { PaginationDto } from '@/modules/shared/dto/pagination.dto';
import { Decimal } from '@prisma/client/runtime/library';
import { generateUUID } from '@/common';
import { QueryItemDto } from './dto/query-items.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ItemsService extends PrismaService{
  create(createItemDto: CreateItemDto) {
    createItemDto.price = new Decimal(createItemDto.price)
    return this.item.create({
      data: {
        id: generateUUID(10),
        ...createItemDto
      }
    })
  }

  async findAll({limit, page, name}: QueryItemDto) {
    const where: Prisma.ItemWhereInput = {
      available: true, 
      name: {contains: name, mode: 'insensitive'  }
    }
    const totalPages = Math.ceil((await this.item.count({where})) / limit);

    const data =await this.item.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit
    })

    return {
      data,
      totalPages,
      currentPage: page
    }
  }

  async findOne(id: string) {
    const item = await this.item.findUnique({where:{id, available: true}})

    if (!item) {
      throw new NotFoundException(`Item with id ${id} not found`)
    }

    return item
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    await this.findOne(id)
    return this.item.update({
      where: {id},
      data: updateItemDto
    })
  }

  async remove(id: string) {
    await this.findOne(id)
    return this.item.update({
      where: {id},
      data: { available: false }
    })
  }
}

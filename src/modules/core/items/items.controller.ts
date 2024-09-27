import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from '@/modules/shared/dto/pagination.dto';
import { Item } from './entities/item.entity';
import { QueryItemDto } from './dto/query-items.dto';

@ApiTags('items')
@ApiBearerAuth()
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Item created successfully', type: Item })
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Returns items', type: [Item] })
  findAll(@Query() query: QueryItemDto) {
    return this.itemsService.findAll(query);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Return item', type: Item })
  @ApiResponse({ status: 404, description: 'Item not found' })
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Item updated successfully', type: Item })
  @ApiResponse({ status: 404, description: 'Item not found' })
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Item removed successfully' })
  @ApiResponse({ status: 404, description: 'Item not found' })
  remove(@Param('id') id: string) {
    return this.itemsService.remove(id);
  }
}

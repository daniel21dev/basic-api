import { PartialType, PickType } from '@nestjs/swagger';
import { CreateItemDto } from './create-item.dto';

export class UpdateItemDto extends PartialType(PickType(CreateItemDto, ['description', 'modelo'])) {}

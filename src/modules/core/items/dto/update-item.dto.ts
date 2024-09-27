import { PickType } from '@nestjs/swagger';
import { CreateItemDto } from './create-item.dto';

export class UpdateItemDto extends PickType(CreateItemDto, ['description']) {}

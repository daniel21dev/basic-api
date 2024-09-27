import { PickType } from "@nestjs/swagger";
import { Item } from "../entities/item.entity";

export class CreateItemDto extends PickType(
  Item,
  ['name', 'description', 'price', 'modelo']
) {}
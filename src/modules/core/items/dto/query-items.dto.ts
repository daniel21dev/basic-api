import { PaginationDto } from "@/modules/shared/dto/pagination.dto";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class QueryItemDto extends PaginationDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;
}
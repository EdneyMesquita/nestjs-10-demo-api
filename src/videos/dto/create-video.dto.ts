import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateVideoDto {
  @ApiProperty()
  @MaxLength(255)
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  @IsOptional()
  description?: string | null;

  @ApiProperty()
  @Min(1)
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  category_id: number;
}

export class CreateVideoWithUploadDto extends CreateVideoDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: string;
}

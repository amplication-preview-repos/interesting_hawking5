/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RestaurantWhereInput } from "./RestaurantWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RestaurantOrderByInput } from "./RestaurantOrderByInput";

@ArgsType()
class RestaurantFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RestaurantWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RestaurantWhereInput, { nullable: true })
  @Type(() => RestaurantWhereInput)
  where?: RestaurantWhereInput;

  @ApiProperty({
    required: false,
    type: [RestaurantOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RestaurantOrderByInput], { nullable: true })
  @Type(() => RestaurantOrderByInput)
  orderBy?: Array<RestaurantOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RestaurantFindManyArgs as RestaurantFindManyArgs };
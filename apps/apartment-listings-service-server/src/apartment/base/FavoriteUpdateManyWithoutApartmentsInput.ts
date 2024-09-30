/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FavoriteWhereUniqueInput } from "../../favorite/base/FavoriteWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FavoriteUpdateManyWithoutApartmentsInput {
  @Field(() => [FavoriteWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FavoriteWhereUniqueInput],
  })
  connect?: Array<FavoriteWhereUniqueInput>;

  @Field(() => [FavoriteWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FavoriteWhereUniqueInput],
  })
  disconnect?: Array<FavoriteWhereUniqueInput>;

  @Field(() => [FavoriteWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FavoriteWhereUniqueInput],
  })
  set?: Array<FavoriteWhereUniqueInput>;
}

export { FavoriteUpdateManyWithoutApartmentsInput as FavoriteUpdateManyWithoutApartmentsInput };

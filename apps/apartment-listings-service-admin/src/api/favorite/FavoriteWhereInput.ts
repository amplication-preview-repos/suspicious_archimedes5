import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FavoriteWhereInput = {
  apartment?: ApartmentWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};

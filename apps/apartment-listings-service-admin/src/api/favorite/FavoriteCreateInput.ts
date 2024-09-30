import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FavoriteCreateInput = {
  apartment?: ApartmentWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

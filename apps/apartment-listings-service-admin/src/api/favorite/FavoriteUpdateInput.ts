import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FavoriteUpdateInput = {
  apartment?: ApartmentWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

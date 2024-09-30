import { ApartmentWhereInput } from "./ApartmentWhereInput";
import { ApartmentOrderByInput } from "./ApartmentOrderByInput";

export type ApartmentFindManyArgs = {
  where?: ApartmentWhereInput;
  orderBy?: Array<ApartmentOrderByInput>;
  skip?: number;
  take?: number;
};

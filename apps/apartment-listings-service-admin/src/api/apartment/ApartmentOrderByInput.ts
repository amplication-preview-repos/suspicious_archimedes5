import { SortOrder } from "../../util/SortOrder";

export type ApartmentOrderByInput = {
  address?: SortOrder;
  area?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  etage?: SortOrder;
  id?: SortOrder;
  landlord?: SortOrder;
  postalCode?: SortOrder;
  price?: SortOrder;
  roomsCount?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

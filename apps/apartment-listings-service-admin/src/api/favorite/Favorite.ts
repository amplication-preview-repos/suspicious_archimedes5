import { Apartment } from "../apartment/Apartment";
import { User } from "../user/User";

export type Favorite = {
  apartment?: Apartment | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};

import { Apartment } from "../apartment/Apartment";
import { User } from "../user/User";

export type Questionnaire = {
  apartment?: Apartment | null;
  createdAt: Date;
  id: string;
  questionText: string | null;
  updatedAt: Date;
  user?: User | null;
};

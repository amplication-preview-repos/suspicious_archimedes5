import { Favorite } from "../favorite/Favorite";
import { Questionnaire } from "../questionnaire/Questionnaire";

export type Apartment = {
  address: string | null;
  area: number | null;
  city: string | null;
  createdAt: Date;
  description: string | null;
  etage: number | null;
  favorites?: Array<Favorite>;
  id: string;
  landlord: string | null;
  postalCode: string | null;
  price: number | null;
  questionnaires?: Array<Questionnaire>;
  roomsCount: number | null;
  title: string | null;
  updatedAt: Date;
};

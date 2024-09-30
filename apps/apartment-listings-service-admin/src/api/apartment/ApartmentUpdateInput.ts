import { FavoriteUpdateManyWithoutApartmentsInput } from "./FavoriteUpdateManyWithoutApartmentsInput";
import { QuestionnaireUpdateManyWithoutApartmentsInput } from "./QuestionnaireUpdateManyWithoutApartmentsInput";

export type ApartmentUpdateInput = {
  address?: string | null;
  area?: number | null;
  city?: string | null;
  description?: string | null;
  etage?: number | null;
  favorites?: FavoriteUpdateManyWithoutApartmentsInput;
  landlord?: string | null;
  postalCode?: string | null;
  price?: number | null;
  questionnaires?: QuestionnaireUpdateManyWithoutApartmentsInput;
  roomsCount?: number | null;
  title?: string | null;
};

import { FavoriteCreateNestedManyWithoutApartmentsInput } from "./FavoriteCreateNestedManyWithoutApartmentsInput";
import { QuestionnaireCreateNestedManyWithoutApartmentsInput } from "./QuestionnaireCreateNestedManyWithoutApartmentsInput";

export type ApartmentCreateInput = {
  address?: string | null;
  area?: number | null;
  city?: string | null;
  description?: string | null;
  etage?: number | null;
  favorites?: FavoriteCreateNestedManyWithoutApartmentsInput;
  landlord?: string | null;
  postalCode?: string | null;
  price?: number | null;
  questionnaires?: QuestionnaireCreateNestedManyWithoutApartmentsInput;
  roomsCount?: number | null;
  title?: string | null;
};

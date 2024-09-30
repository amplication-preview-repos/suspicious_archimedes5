import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FavoriteListRelationFilter } from "../favorite/FavoriteListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionnaireListRelationFilter } from "../questionnaire/QuestionnaireListRelationFilter";

export type ApartmentWhereInput = {
  address?: StringNullableFilter;
  area?: FloatNullableFilter;
  city?: StringNullableFilter;
  description?: StringNullableFilter;
  etage?: IntNullableFilter;
  favorites?: FavoriteListRelationFilter;
  id?: StringFilter;
  landlord?: StringNullableFilter;
  postalCode?: StringNullableFilter;
  price?: FloatNullableFilter;
  questionnaires?: QuestionnaireListRelationFilter;
  roomsCount?: IntNullableFilter;
  title?: StringNullableFilter;
};

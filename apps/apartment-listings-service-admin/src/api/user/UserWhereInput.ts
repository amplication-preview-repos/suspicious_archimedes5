import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FavoriteListRelationFilter } from "../favorite/FavoriteListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionnaireListRelationFilter } from "../questionnaire/QuestionnaireListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  favorites?: FavoriteListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  questionnaires?: QuestionnaireListRelationFilter;
  username?: StringFilter;
};

import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuestionnaireWhereInput = {
  apartment?: ApartmentWhereUniqueInput;
  id?: StringFilter;
  questionText?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};

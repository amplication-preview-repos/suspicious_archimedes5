import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuestionnaireUpdateInput = {
  apartment?: ApartmentWhereUniqueInput | null;
  questionText?: string | null;
  user?: UserWhereUniqueInput | null;
};
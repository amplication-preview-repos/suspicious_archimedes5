import { FavoriteCreateNestedManyWithoutUsersInput } from "./FavoriteCreateNestedManyWithoutUsersInput";
import { QuestionnaireCreateNestedManyWithoutUsersInput } from "./QuestionnaireCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  favorites?: FavoriteCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  questionnaires?: QuestionnaireCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};

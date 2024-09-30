import { FavoriteUpdateManyWithoutUsersInput } from "./FavoriteUpdateManyWithoutUsersInput";
import { QuestionnaireUpdateManyWithoutUsersInput } from "./QuestionnaireUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  favorites?: FavoriteUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  questionnaires?: QuestionnaireUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};

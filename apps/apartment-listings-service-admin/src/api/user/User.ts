import { Favorite } from "../favorite/Favorite";
import { Questionnaire } from "../questionnaire/Questionnaire";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  favorites?: Array<Favorite>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  questionnaires?: Array<Questionnaire>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

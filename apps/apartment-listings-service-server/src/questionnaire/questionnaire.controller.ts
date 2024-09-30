import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestionnaireService } from "./questionnaire.service";
import { QuestionnaireControllerBase } from "./base/questionnaire.controller.base";

@swagger.ApiTags("questionnaires")
@common.Controller("questionnaires")
export class QuestionnaireController extends QuestionnaireControllerBase {
  constructor(
    protected readonly service: QuestionnaireService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

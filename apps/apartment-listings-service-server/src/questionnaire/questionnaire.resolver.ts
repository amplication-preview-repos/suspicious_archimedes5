import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestionnaireResolverBase } from "./base/questionnaire.resolver.base";
import { Questionnaire } from "./base/Questionnaire";
import { QuestionnaireService } from "./questionnaire.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Questionnaire)
export class QuestionnaireResolver extends QuestionnaireResolverBase {
  constructor(
    protected readonly service: QuestionnaireService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

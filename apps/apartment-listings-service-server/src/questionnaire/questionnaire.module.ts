import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestionnaireModuleBase } from "./base/questionnaire.module.base";
import { QuestionnaireService } from "./questionnaire.service";
import { QuestionnaireController } from "./questionnaire.controller";
import { QuestionnaireResolver } from "./questionnaire.resolver";

@Module({
  imports: [QuestionnaireModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestionnaireController],
  providers: [QuestionnaireService, QuestionnaireResolver],
  exports: [QuestionnaireService],
})
export class QuestionnaireModule {}

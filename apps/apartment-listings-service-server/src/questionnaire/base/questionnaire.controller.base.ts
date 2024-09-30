/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { QuestionnaireService } from "../questionnaire.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuestionnaireCreateInput } from "./QuestionnaireCreateInput";
import { Questionnaire } from "./Questionnaire";
import { QuestionnaireFindManyArgs } from "./QuestionnaireFindManyArgs";
import { QuestionnaireWhereUniqueInput } from "./QuestionnaireWhereUniqueInput";
import { QuestionnaireUpdateInput } from "./QuestionnaireUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuestionnaireControllerBase {
  constructor(
    protected readonly service: QuestionnaireService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Questionnaire })
  @nestAccessControl.UseRoles({
    resource: "Questionnaire",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createQuestionnaire(
    @common.Body() data: QuestionnaireCreateInput
  ): Promise<Questionnaire> {
    return await this.service.createQuestionnaire({
      data: {
        ...data,

        apartment: data.apartment
          ? {
              connect: data.apartment,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        apartment: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        questionText: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Questionnaire] })
  @ApiNestedQuery(QuestionnaireFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Questionnaire",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questionnaires(
    @common.Req() request: Request
  ): Promise<Questionnaire[]> {
    const args = plainToClass(QuestionnaireFindManyArgs, request.query);
    return this.service.questionnaires({
      ...args,
      select: {
        apartment: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        questionText: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Questionnaire })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Questionnaire",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questionnaire(
    @common.Param() params: QuestionnaireWhereUniqueInput
  ): Promise<Questionnaire | null> {
    const result = await this.service.questionnaire({
      where: params,
      select: {
        apartment: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        questionText: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Questionnaire })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Questionnaire",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateQuestionnaire(
    @common.Param() params: QuestionnaireWhereUniqueInput,
    @common.Body() data: QuestionnaireUpdateInput
  ): Promise<Questionnaire | null> {
    try {
      return await this.service.updateQuestionnaire({
        where: params,
        data: {
          ...data,

          apartment: data.apartment
            ? {
                connect: data.apartment,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          apartment: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          questionText: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Questionnaire })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Questionnaire",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQuestionnaire(
    @common.Param() params: QuestionnaireWhereUniqueInput
  ): Promise<Questionnaire | null> {
    try {
      return await this.service.deleteQuestionnaire({
        where: params,
        select: {
          apartment: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          questionText: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

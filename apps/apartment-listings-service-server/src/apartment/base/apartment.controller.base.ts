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
import { ApartmentService } from "../apartment.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ApartmentCreateInput } from "./ApartmentCreateInput";
import { Apartment } from "./Apartment";
import { ApartmentFindManyArgs } from "./ApartmentFindManyArgs";
import { ApartmentWhereUniqueInput } from "./ApartmentWhereUniqueInput";
import { ApartmentUpdateInput } from "./ApartmentUpdateInput";
import { FavoriteFindManyArgs } from "../../favorite/base/FavoriteFindManyArgs";
import { Favorite } from "../../favorite/base/Favorite";
import { FavoriteWhereUniqueInput } from "../../favorite/base/FavoriteWhereUniqueInput";
import { QuestionnaireFindManyArgs } from "../../questionnaire/base/QuestionnaireFindManyArgs";
import { Questionnaire } from "../../questionnaire/base/Questionnaire";
import { QuestionnaireWhereUniqueInput } from "../../questionnaire/base/QuestionnaireWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ApartmentControllerBase {
  constructor(
    protected readonly service: ApartmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Apartment })
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createApartment(
    @common.Body() data: ApartmentCreateInput
  ): Promise<Apartment> {
    return await this.service.createApartment({
      data: data,
      select: {
        address: true,
        area: true,
        city: true,
        createdAt: true,
        description: true,
        etage: true,
        id: true,
        landlord: true,
        postalCode: true,
        price: true,
        roomsCount: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Apartment] })
  @ApiNestedQuery(ApartmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async apartments(@common.Req() request: Request): Promise<Apartment[]> {
    const args = plainToClass(ApartmentFindManyArgs, request.query);
    return this.service.apartments({
      ...args,
      select: {
        address: true,
        area: true,
        city: true,
        createdAt: true,
        description: true,
        etage: true,
        id: true,
        landlord: true,
        postalCode: true,
        price: true,
        roomsCount: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Apartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async apartment(
    @common.Param() params: ApartmentWhereUniqueInput
  ): Promise<Apartment | null> {
    const result = await this.service.apartment({
      where: params,
      select: {
        address: true,
        area: true,
        city: true,
        createdAt: true,
        description: true,
        etage: true,
        id: true,
        landlord: true,
        postalCode: true,
        price: true,
        roomsCount: true,
        title: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Apartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateApartment(
    @common.Param() params: ApartmentWhereUniqueInput,
    @common.Body() data: ApartmentUpdateInput
  ): Promise<Apartment | null> {
    try {
      return await this.service.updateApartment({
        where: params,
        data: data,
        select: {
          address: true,
          area: true,
          city: true,
          createdAt: true,
          description: true,
          etage: true,
          id: true,
          landlord: true,
          postalCode: true,
          price: true,
          roomsCount: true,
          title: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Apartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteApartment(
    @common.Param() params: ApartmentWhereUniqueInput
  ): Promise<Apartment | null> {
    try {
      return await this.service.deleteApartment({
        where: params,
        select: {
          address: true,
          area: true,
          city: true,
          createdAt: true,
          description: true,
          etage: true,
          id: true,
          landlord: true,
          postalCode: true,
          price: true,
          roomsCount: true,
          title: true,
          updatedAt: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/favorites")
  @ApiNestedQuery(FavoriteFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Favorite",
    action: "read",
    possession: "any",
  })
  async findFavorites(
    @common.Req() request: Request,
    @common.Param() params: ApartmentWhereUniqueInput
  ): Promise<Favorite[]> {
    const query = plainToClass(FavoriteFindManyArgs, request.query);
    const results = await this.service.findFavorites(params.id, {
      ...query,
      select: {
        apartment: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/favorites")
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "update",
    possession: "any",
  })
  async connectFavorites(
    @common.Param() params: ApartmentWhereUniqueInput,
    @common.Body() body: FavoriteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      favorites: {
        connect: body,
      },
    };
    await this.service.updateApartment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/favorites")
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "update",
    possession: "any",
  })
  async updateFavorites(
    @common.Param() params: ApartmentWhereUniqueInput,
    @common.Body() body: FavoriteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      favorites: {
        set: body,
      },
    };
    await this.service.updateApartment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/favorites")
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "update",
    possession: "any",
  })
  async disconnectFavorites(
    @common.Param() params: ApartmentWhereUniqueInput,
    @common.Body() body: FavoriteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      favorites: {
        disconnect: body,
      },
    };
    await this.service.updateApartment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/questionnaires")
  @ApiNestedQuery(QuestionnaireFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Questionnaire",
    action: "read",
    possession: "any",
  })
  async findQuestionnaires(
    @common.Req() request: Request,
    @common.Param() params: ApartmentWhereUniqueInput
  ): Promise<Questionnaire[]> {
    const query = plainToClass(QuestionnaireFindManyArgs, request.query);
    const results = await this.service.findQuestionnaires(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/questionnaires")
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "update",
    possession: "any",
  })
  async connectQuestionnaires(
    @common.Param() params: ApartmentWhereUniqueInput,
    @common.Body() body: QuestionnaireWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questionnaires: {
        connect: body,
      },
    };
    await this.service.updateApartment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questionnaires")
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "update",
    possession: "any",
  })
  async updateQuestionnaires(
    @common.Param() params: ApartmentWhereUniqueInput,
    @common.Body() body: QuestionnaireWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questionnaires: {
        set: body,
      },
    };
    await this.service.updateApartment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questionnaires")
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "update",
    possession: "any",
  })
  async disconnectQuestionnaires(
    @common.Param() params: ApartmentWhereUniqueInput,
    @common.Body() body: QuestionnaireWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questionnaires: {
        disconnect: body,
      },
    };
    await this.service.updateApartment({
      where: params,
      data,
      select: { id: true },
    });
  }
}

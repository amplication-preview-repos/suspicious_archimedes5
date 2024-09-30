/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Favorite } from "./Favorite";
import { FavoriteCountArgs } from "./FavoriteCountArgs";
import { FavoriteFindManyArgs } from "./FavoriteFindManyArgs";
import { FavoriteFindUniqueArgs } from "./FavoriteFindUniqueArgs";
import { CreateFavoriteArgs } from "./CreateFavoriteArgs";
import { UpdateFavoriteArgs } from "./UpdateFavoriteArgs";
import { DeleteFavoriteArgs } from "./DeleteFavoriteArgs";
import { Apartment } from "../../apartment/base/Apartment";
import { User } from "../../user/base/User";
import { FavoriteService } from "../favorite.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Favorite)
export class FavoriteResolverBase {
  constructor(
    protected readonly service: FavoriteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Favorite",
    action: "read",
    possession: "any",
  })
  async _favoritesMeta(
    @graphql.Args() args: FavoriteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Favorite])
  @nestAccessControl.UseRoles({
    resource: "Favorite",
    action: "read",
    possession: "any",
  })
  async favorites(
    @graphql.Args() args: FavoriteFindManyArgs
  ): Promise<Favorite[]> {
    return this.service.favorites(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Favorite, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Favorite",
    action: "read",
    possession: "own",
  })
  async favorite(
    @graphql.Args() args: FavoriteFindUniqueArgs
  ): Promise<Favorite | null> {
    const result = await this.service.favorite(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Favorite)
  @nestAccessControl.UseRoles({
    resource: "Favorite",
    action: "create",
    possession: "any",
  })
  async createFavorite(
    @graphql.Args() args: CreateFavoriteArgs
  ): Promise<Favorite> {
    return await this.service.createFavorite({
      ...args,
      data: {
        ...args.data,

        apartment: args.data.apartment
          ? {
              connect: args.data.apartment,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Favorite)
  @nestAccessControl.UseRoles({
    resource: "Favorite",
    action: "update",
    possession: "any",
  })
  async updateFavorite(
    @graphql.Args() args: UpdateFavoriteArgs
  ): Promise<Favorite | null> {
    try {
      return await this.service.updateFavorite({
        ...args,
        data: {
          ...args.data,

          apartment: args.data.apartment
            ? {
                connect: args.data.apartment,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Favorite)
  @nestAccessControl.UseRoles({
    resource: "Favorite",
    action: "delete",
    possession: "any",
  })
  async deleteFavorite(
    @graphql.Args() args: DeleteFavoriteArgs
  ): Promise<Favorite | null> {
    try {
      return await this.service.deleteFavorite(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Apartment, {
    nullable: true,
    name: "apartment",
  })
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "read",
    possession: "any",
  })
  async getApartment(
    @graphql.Parent() parent: Favorite
  ): Promise<Apartment | null> {
    const result = await this.service.getApartment(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Favorite): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

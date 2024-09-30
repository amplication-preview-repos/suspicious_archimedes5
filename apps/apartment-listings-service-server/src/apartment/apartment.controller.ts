import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApartmentService } from "./apartment.service";
import { ApartmentControllerBase } from "./base/apartment.controller.base";

@swagger.ApiTags("apartments")
@common.Controller("apartments")
export class ApartmentController extends ApartmentControllerBase {
  constructor(
    protected readonly service: ApartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

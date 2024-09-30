import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApartmentModuleBase } from "./base/apartment.module.base";
import { ApartmentService } from "./apartment.service";
import { ApartmentController } from "./apartment.controller";
import { ApartmentResolver } from "./apartment.resolver";

@Module({
  imports: [ApartmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApartmentController],
  providers: [ApartmentService, ApartmentResolver],
  exports: [ApartmentService],
})
export class ApartmentModule {}

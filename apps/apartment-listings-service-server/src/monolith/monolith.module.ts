import { Module } from "@nestjs/common";
import { MonolithService } from "./monolith.service";
import { MonolithController } from "./monolith.controller";
import { MonolithResolver } from "./monolith.resolver";

@Module({
  controllers: [MonolithController],
  providers: [MonolithService, MonolithResolver],
  exports: [MonolithService],
})
export class MonolithModule {}

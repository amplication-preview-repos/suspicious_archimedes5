import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MonolithService } from "./monolith.service";

@swagger.ApiTags("monoliths")
@common.Controller("monoliths")
export class MonolithController {
  constructor(protected readonly service: MonolithService) {}
}

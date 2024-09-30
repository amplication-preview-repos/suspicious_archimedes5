import * as graphql from "@nestjs/graphql";
import { MonolithService } from "./monolith.service";

export class MonolithResolver {
  constructor(protected readonly service: MonolithService) {}
}

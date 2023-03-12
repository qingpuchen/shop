import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VipUserService } from "./vipUser.service";
import { VipUserControllerBase } from "./base/vipUser.controller.base";

@swagger.ApiTags("vipUsers")
@common.Controller("vipUsers")
export class VipUserController extends VipUserControllerBase {
  constructor(
    protected readonly service: VipUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

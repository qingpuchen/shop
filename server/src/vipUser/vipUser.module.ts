import { Module } from "@nestjs/common";
import { VipUserModuleBase } from "./base/vipUser.module.base";
import { VipUserService } from "./vipUser.service";
import { VipUserController } from "./vipUser.controller";
import { VipUserResolver } from "./vipUser.resolver";

@Module({
  imports: [VipUserModuleBase],
  controllers: [VipUserController],
  providers: [VipUserService, VipUserResolver],
  exports: [VipUserService],
})
export class VipUserModule {}

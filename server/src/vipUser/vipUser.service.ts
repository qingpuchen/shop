import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VipUserServiceBase } from "./base/vipUser.service.base";

@Injectable()
export class VipUserService extends VipUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

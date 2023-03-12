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
import { VipUserService } from "../vipUser.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VipUserCreateInput } from "./VipUserCreateInput";
import { VipUserWhereInput } from "./VipUserWhereInput";
import { VipUserWhereUniqueInput } from "./VipUserWhereUniqueInput";
import { VipUserFindManyArgs } from "./VipUserFindManyArgs";
import { VipUserUpdateInput } from "./VipUserUpdateInput";
import { VipUser } from "./VipUser";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VipUserControllerBase {
  constructor(
    protected readonly service: VipUserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VipUser })
  @nestAccessControl.UseRoles({
    resource: "VipUser",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: VipUserCreateInput): Promise<VipUser> {
    return await this.service.create({
      data: data,
      select: {
        cost: true,
        createdAt: true,
        id: true,
        mobile: true,
        status: true,
        updatedAt: true,
        userName: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [VipUser] })
  @ApiNestedQuery(VipUserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "VipUser",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<VipUser[]> {
    const args = plainToClass(VipUserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        cost: true,
        createdAt: true,
        id: true,
        mobile: true,
        status: true,
        updatedAt: true,
        userName: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VipUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "VipUser",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: VipUserWhereUniqueInput
  ): Promise<VipUser | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        cost: true,
        createdAt: true,
        id: true,
        mobile: true,
        status: true,
        updatedAt: true,
        userName: true,
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
  @swagger.ApiOkResponse({ type: VipUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "VipUser",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: VipUserWhereUniqueInput,
    @common.Body() data: VipUserUpdateInput
  ): Promise<VipUser | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          cost: true,
          createdAt: true,
          id: true,
          mobile: true,
          status: true,
          updatedAt: true,
          userName: true,
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
  @swagger.ApiOkResponse({ type: VipUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "VipUser",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: VipUserWhereUniqueInput
  ): Promise<VipUser | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          cost: true,
          createdAt: true,
          id: true,
          mobile: true,
          status: true,
          updatedAt: true,
          userName: true,
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
}

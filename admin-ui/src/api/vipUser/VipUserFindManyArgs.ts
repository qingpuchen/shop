import { VipUserWhereInput } from "./VipUserWhereInput";
import { VipUserOrderByInput } from "./VipUserOrderByInput";

export type VipUserFindManyArgs = {
  where?: VipUserWhereInput;
  orderBy?: Array<VipUserOrderByInput>;
  skip?: number;
  take?: number;
};

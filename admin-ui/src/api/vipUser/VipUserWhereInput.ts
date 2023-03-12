import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type VipUserWhereInput = {
  cost?: FloatNullableFilter;
  id?: StringFilter;
  mobile?: IntNullableFilter;
  status?: IntNullableFilter;
  userName?: StringFilter;
};

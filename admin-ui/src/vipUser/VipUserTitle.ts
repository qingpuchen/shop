import { VipUser as TVipUser } from "../api/vipUser/VipUser";

export const VIPUSER_TITLE_FIELD = "userName";

export const VipUserTitle = (record: TVipUser): string => {
  return record.userName || String(record.id);
};

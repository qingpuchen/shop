import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const VipUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cost" source="cost" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Mobile" source="mobile" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserName" source="userName" />
      </SimpleShowLayout>
    </Show>
  );
};

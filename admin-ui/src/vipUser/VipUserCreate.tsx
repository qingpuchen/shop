import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const VipUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Cost" source="cost" />
        <NumberInput step={1} label="Mobile" source="mobile" />
        <NumberInput step={1} label="Status" source="status" />
        <TextInput label="UserName" source="userName" />
      </SimpleForm>
    </Create>
  );
};

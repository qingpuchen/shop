import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const VipUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Cost" source="cost" />
        <NumberInput step={1} label="Mobile" source="mobile" />
        <NumberInput step={1} label="Status" source="status" />
        <TextInput label="UserName" source="userName" />
      </SimpleForm>
    </Edit>
  );
};

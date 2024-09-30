import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ApartmentTitle } from "../apartment/ApartmentTitle";
import { UserTitle } from "../user/UserTitle";

export const FavoriteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="apartment.id"
          reference="Apartment"
          label="apartment"
        >
          <SelectInput optionText={ApartmentTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

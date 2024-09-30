import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ApartmentTitle } from "../apartment/ApartmentTitle";
import { UserTitle } from "../user/UserTitle";

export const QuestionnaireCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="apartment.id"
          reference="Apartment"
          label="apartment"
        >
          <SelectInput optionText={ApartmentTitle} />
        </ReferenceInput>
        <TextInput label="questionText" multiline source="questionText" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

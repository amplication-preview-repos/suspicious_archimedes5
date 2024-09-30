import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ApartmentTitle } from "../apartment/ApartmentTitle";
import { UserTitle } from "../user/UserTitle";

export const QuestionnaireEdit = (props: EditProps): React.ReactElement => {
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
        <TextInput label="questionText" multiline source="questionText" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

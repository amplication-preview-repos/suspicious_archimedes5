import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FavoriteTitle } from "../favorite/FavoriteTitle";
import { QuestionnaireTitle } from "../questionnaire/QuestionnaireTitle";

export const ApartmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <NumberInput label="area" source="area" />
        <TextInput label="city" source="city" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="etage" source="etage" />
        <ReferenceArrayInput source="favorites" reference="Favorite">
          <SelectArrayInput
            optionText={FavoriteTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="landlord" source="landlord" />
        <TextInput label="postalCode" source="postalCode" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput source="questionnaires" reference="Questionnaire">
          <SelectArrayInput
            optionText={QuestionnaireTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="roomsCount" source="roomsCount" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};

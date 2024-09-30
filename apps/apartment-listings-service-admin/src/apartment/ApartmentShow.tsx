import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { APARTMENT_TITLE_FIELD } from "./ApartmentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ApartmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="area" source="area" />
        <TextField label="city" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="etage" source="etage" />
        <TextField label="ID" source="id" />
        <TextField label="landlord" source="landlord" />
        <TextField label="postalCode" source="postalCode" />
        <TextField label="price" source="price" />
        <TextField label="roomsCount" source="roomsCount" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Favorite"
          target="apartmentId"
          label="Favorites"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="apartment"
              source="apartment.id"
              reference="Apartment"
            >
              <TextField source={APARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Questionnaire"
          target="apartmentId"
          label="Questionnaires"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="apartment"
              source="apartment.id"
              reference="Apartment"
            >
              <TextField source={APARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="questionText" source="questionText" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

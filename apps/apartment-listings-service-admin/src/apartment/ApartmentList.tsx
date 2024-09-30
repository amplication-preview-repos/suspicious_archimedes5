import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ApartmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Apartments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

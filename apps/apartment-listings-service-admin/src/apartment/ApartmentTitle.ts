import { Apartment as TApartment } from "../api/apartment/Apartment";

export const APARTMENT_TITLE_FIELD = "title";

export const ApartmentTitle = (record: TApartment): string => {
  return record.title?.toString() || String(record.id);
};

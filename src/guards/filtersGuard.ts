import { FILTERS, Filters } from "../models/filtersModel";

export const filtersGuard = (
  potentialFilter: unknown
): potentialFilter is Filters => {
  return (
    typeof potentialFilter === "string" &&
    potentialFilter !== null &&
    new Set<string>(FILTERS).has(potentialFilter)
  );
};

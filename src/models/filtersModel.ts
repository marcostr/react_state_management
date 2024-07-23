export const FILTERS = ["all", "completed", "uncompleted"] as const;

export type Filters = (typeof FILTERS)[number];

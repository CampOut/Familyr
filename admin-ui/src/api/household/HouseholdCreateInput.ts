import { UserCreateNestedManyWithoutHouseholdsInput } from "./UserCreateNestedManyWithoutHouseholdsInput";

export type HouseholdCreateInput = {
  image?: string | null;
  members?: UserCreateNestedManyWithoutHouseholdsInput;
  name: string;
};

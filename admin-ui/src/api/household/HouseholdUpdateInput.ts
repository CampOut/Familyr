import { UserUpdateManyWithoutHouseholdsInput } from "./UserUpdateManyWithoutHouseholdsInput";

export type HouseholdUpdateInput = {
  image?: string | null;
  members?: UserUpdateManyWithoutHouseholdsInput;
  name?: string;
};

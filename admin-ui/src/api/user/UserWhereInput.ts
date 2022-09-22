import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";

export type UserWhereInput = {
  email?: StringFilter;
  firstName?: StringNullableFilter;
  household?: HouseholdWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};

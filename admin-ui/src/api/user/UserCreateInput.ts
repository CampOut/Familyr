import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  avatarUrl?: string | null;
  bio?: string | null;
  email: string;
  firstName?: string | null;
  household?: HouseholdWhereUniqueInput | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};

import { Household } from "../household/Household";
import { JsonValue } from "type-fest";

export type User = {
  avatarUrl: string | null;
  bio: string | null;
  createdAt: Date;
  email: string;
  firstName: string | null;
  household?: Household | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

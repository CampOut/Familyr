import { User } from "../user/User";

export type Household = {
  createdAt: Date;
  id: string;
  image: string | null;
  members?: Array<User>;
  name: string;
  updatedAt: Date;
};

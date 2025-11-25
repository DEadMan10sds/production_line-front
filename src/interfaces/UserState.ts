import type { Role } from "../types/Role";

export default interface UserState {
  roles: Role[];
  name: string;
  surname: string;
  email: string;
  id: number;
  created_at: string;
}

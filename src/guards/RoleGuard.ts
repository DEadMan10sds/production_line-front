import { redirect } from "react-router-dom";
import { store } from "../store/Store";
import type { Role } from "../types/Role";

export function RoleGuard(rolesToVerify: Role[]) {
  const state = store.getState();
  const userHasRole: boolean = state.user.roles.some((role) =>
    rolesToVerify.includes(role)
  );

  if (!userHasRole) redirect("/");
}

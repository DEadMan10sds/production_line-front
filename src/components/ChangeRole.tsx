import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../reducer/User/User";
import type { RootState } from "../store/Store";
import type { Role } from "../types/Role";
interface navbarRole {
  text: string;
  value: Role;
}

const roles: navbarRole[] = [
  {
    text: "Admin",
    value: "admin",
  },
  {
    text: "User",
    value: "user",
  },
];

export const ChangeRole = () => {
  const currentRole = useSelector((state: RootState) => state.user.role);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3">
      {roles.map((role) => (
        <button
          className={`h-fit my-auto transition-all cursor-pointer border-b-2 hover:border-b-amber-600 ${
            role.value === currentRole
              ? " border-b-amber-800"
              : "border-b-transparent"
          }`}
          key={role.value}
          onClick={() => {
            dispatch(setRole(role.value));
          }}
        >
          {role.text}
        </button>
      ))}
    </div>
  );
};

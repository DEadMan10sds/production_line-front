import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../reducer/User/User";
import type { Role } from "../types/Role";
import type { RootState } from "../store/Store";
import { Link } from "react-router-dom";

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

export const Navbar = () => {
  const dispatch = useDispatch();
  const currentRole = useSelector((state: RootState) => state.user.role);

  return (
    <div className="flex justify-between py-2 px-8 mb-4 border-b border-stone-700">
      <Link to="/">
        <h1 className="text-4xl font-bold my-5">Traceability</h1>
      </Link>

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
    </div>
  );
};

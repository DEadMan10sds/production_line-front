import { useState, useMemo } from "react";
import { useGetAllUsersQuery } from "../api/UserApi";
import {
  UserForm,
  type EditUserData,
} from "../components/Features/user/UserForm";
import { UserItem } from "../components/Features/user/UserItem";

type Mode = "edit" | "list" | "new";

export type UserItemProps = {
  user: EditUserData;
  onEdit: (user: EditUserData) => void;
};

const MemoUserItem = Object.assign(UserItem, { displayName: "MemoUserItem" });

export const UsersManager = () => {
  const { data, isLoading } = useGetAllUsersQuery();

  const [userToEdit, setUserToEdit] = useState<EditUserData | undefined>(
    undefined
  );
  const [mode, setMode] = useState<Mode>("list");

  const handleEdit = (user: EditUserData) => {
    setUserToEdit(user);
    setMode("edit");
  };

  const modes = useMemo(() => {
    return {
      list: (
        <div className="transition-opacity duration-300 absolute inset-0">
          <button
            className="rounded-md m-2 border border-amber-800 hover:border-amber-500 cursor-pointer p-3 transition"
            onClick={() => setMode("new")}
          >
            Nuevo Usuario
          </button>
          <ul className="my-2">
            {data?.map((user) => (
              <MemoUserItem key={user.id} user={user} onEdit={handleEdit} />
            ))}
          </ul>
        </div>
      ),
      edit: (
        <div className="transition-opacity duration-300 absolute inset-0">
          <UserForm
            key="edit"
            userData={userToEdit}
            cancelFunction={() => {
              setUserToEdit(undefined);
              setMode("list");
            }}
          />
        </div>
      ),
      new: (
        <div className="transition-opacity duration-300 absolute inset-0">
          <UserForm key="new" cancelFunction={() => setMode("list")} />
        </div>
      ),
    };
  }, [data, userToEdit]);

  if (isLoading) return <p>Cargando usuarios</p>;
  if (data && data.length === 0) return <p>No hay usuarios registrados</p>;

  return (
    <div className="relative min-h-[300px]">
      {Object.entries(modes).map(([m, component]) => (
        <div
          key={m}
          className={`transition-opacity duration-300 ${
            m === mode
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {component}
        </div>
      ))}
    </div>
  );
};

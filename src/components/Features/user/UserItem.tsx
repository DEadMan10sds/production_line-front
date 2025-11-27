import { PiNotePencil, PiTrash } from "react-icons/pi";
import type { UserItemProps } from "../../../pages/Users";

export const UserItem = ({ user, onEdit }: UserItemProps) => (
  <li className="flex justify-between w-full transition p-2 border-2 border-transparent rounded-sm hover:border-gray-500">
    <p>{user.name}</p>
    <div className="flex gap-3">
      <button onClick={() => onEdit(user)} className="cursor-pointer">
        <PiNotePencil
          className="hover:fill-green-700 transition"
          size="1.5rem"
        />
      </button>
      <button className="cursor-pointer">
        <PiTrash className="hover:fill-red-700 transition" size="1.5rem" />
      </button>
    </div>
  </li>
);

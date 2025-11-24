import { useEffect, useState } from "react";
import { useGetAllQuery, type Operation } from "../api/OperationApi";
import { useDispatch } from "react-redux";
import { setOperation } from "../reducer/Operations/Operation";

export const AdminSettings = () => {
  const { data, isLoading } = useGetAllQuery(null);
  const dispatch = useDispatch();
  const [allOperations, setAllOperations] = useState<Operation[]>([]);

  useEffect(() => {
    if (data) setAllOperations(data);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {allOperations?.map((operation) => (
            <li
              key={operation.id}
              onClick={() => {
                dispatch(setOperation(operation));
              }}
              className="cursor-pointer"
            >
              {operation.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

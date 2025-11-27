import { useEffect, useState } from "react";
import { useGetAllQuery, type Operation } from "../api/OperationApi";
import { useDispatch } from "react-redux";
import { setOperation } from "../reducer/Operations/Operation";
import { OperationCard } from "../components/Operation/OperationCard";

export const AdminSettings = () => {
  const { data, isLoading } = useGetAllQuery(null);
  const dispatch = useDispatch();
  const [allOperations, setAllOperations] = useState<Operation[]>([]);

  useEffect(() => {
    if (data) setAllOperations(data);
  }, [data]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex gap-3">
      {allOperations?.map((operation) => (
        <OperationCard
          operation={operation}
          action={() => dispatch(setOperation(operation))}
        />
      ))}
    </div>
  );
};

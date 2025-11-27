import type { Operation } from "../../api/OperationApi";

export const OperationCard = ({
  operation,
  action,
}: {
  operation: Operation;
  action: () => void;
}) => {
  return (
    <div
      key={operation.id}
      onClick={action}
      className="cursor-pointer border rounded-sm border-amber-800 hover:border-white p-3 w-fit transition"
    >
      {operation.name}
    </div>
  );
};

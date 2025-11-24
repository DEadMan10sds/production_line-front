import { useSelector } from "react-redux";
import type { RootState } from "../store/Store";

export function useGetInitialComponent({ byId = false } = {}) {
  const { features, currentStep } = useSelector(
    (state: RootState) => state.operation
  );
  if (!features?.length) return null;
  if (
    !Number.isInteger(currentStep) ||
    currentStep < 0 ||
    currentStep > features.length
  )
    return null;

  return byId
    ? features.find((s) => s.id === currentStep)?.elementKey ?? null
    : features[currentStep]?.elementKey ?? null;
}

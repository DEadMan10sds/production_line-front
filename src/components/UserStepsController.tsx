import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  prevStep,
  resetCurrentStep,
} from "../reducer/Operations/Operation";
import type { RootState } from "../store/Store";
import { Button } from "./general/Button";

export const UserStepsController = ({
  canGoNext = true,
  canGoPrev = true,
}: {
  canGoNext?: boolean;
  canGoPrev?: boolean;
}) => {
  const dispatch = useDispatch();
  const currentStep: number = useSelector(
    (state: RootState) => state.operation.currentStep
  );
  const steps: number = useSelector(
    (state: RootState) => state.operation.features.length
  );

  return (
    <div className="grid grid-cols-2 gap-4">
      {canGoPrev && (
        <Button
          text="Anterior"
          variant="custom"
          color="#FFF"
          onClick={() => dispatch(prevStep())}
        />
      )}
      {canGoNext && (
        <Button
          text="Siguiente"
          onClick={() =>
            currentStep < steps - 1
              ? dispatch(nextStep())
              : dispatch(resetCurrentStep())
          }
        />
      )}
    </div>
  );
};

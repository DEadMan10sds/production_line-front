import { createSlice } from "@reduxjs/toolkit";
import { type Operation } from "../../api/OperationApi";
import GetJsonFromLocalStorage from "../../common/GetJsonFromLocalStorage";

const initialState = GetJsonFromLocalStorage<
  {
    currentStep: number;
  } & Operation
>("operation") || {
  currentStep: 0,
  id: "",
  name: "",
  features: [],
};

const OperationReducer = createSlice({
  name: "operation",
  initialState,
  reducers: {
    resetCurrentStep(state) {
      state.currentStep = 0;
    },
    nextStep(state) {
      state.currentStep = Math.min(
        state.currentStep + 1,
        state.features.length - 1
      );
    },
    prevStep(state) {
      state.currentStep = Math.max(state.currentStep - 1, 0);
    },
    setOperation: (state, action) => ({
      ...state,
      ...action.payload,
      currentStep: 0,
    }),
  },
});

export const { nextStep, prevStep, resetCurrentStep, setOperation } =
  OperationReducer.actions;
export default OperationReducer.reducer;

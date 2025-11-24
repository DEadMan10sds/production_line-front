import { createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../../api/AuthApi";

const initialState = { token: null, id: null };

const AuthReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      AuthApi.endpoints.login.matchFulfilled,
      (_state, { payload }) => payload
    );
  },
});

export const { setToken, logout } = AuthReducer.actions;
export default AuthReducer.reducer;

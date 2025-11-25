import { createSlice } from "@reduxjs/toolkit";
import type UserState from "../../interfaces/UserState";
import { UserApi } from "../../api/UserApi";
import GetJsonFromLocalStorage from "../../common/GetJsonFromLocalStorage";

const initialState: UserState =
  GetJsonFromLocalStorage("user") || ({} as UserState);

const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      UserApi.endpoints.getUser.matchFulfilled,
      (_state, { payload }) => payload
    );
  },
});

export default UserReducer.reducer;

import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducer/User/User";
import OperationReducer from "../reducer/Operations/Operation";
import AuthReducer from "../reducer/Auth/Auth";
import { OperationApi } from "../api/OperationApi";
import { AuthApi } from "../api/AuthApi";
import { UserApi } from "../api/UserApi";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: UserReducer,
    operation: OperationReducer,
    [OperationApi.reducerPath]: OperationApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      OperationApi.middleware,
      AuthApi.middleware,
      UserApi.middleware,
    ]),
});

store.subscribe(() => {
  const { user, operation, auth } = store.getState();
  localStorage.setItem("operation", JSON.stringify(operation));
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("auth", JSON.stringify(auth));
});

export type RootState = ReturnType<typeof store.getState>;

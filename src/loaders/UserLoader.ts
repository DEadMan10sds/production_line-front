import { redirect } from "react-router-dom";
import { UserApi } from "../api/UserApi";
import { store } from "../store/Store";

export async function UserLoader() {
  const state = store.getState();

  if (!state.auth.token) throw redirect("/login");

  if (state.user.name) return;

  const subscription = store.dispatch(
    UserApi.endpoints.getUser.initiate(state.auth.id)
  );

  const { data, error } = await subscription;

  console.log(data);

  if (!error) {
    subscription.unsubscribe();
    return data;
  }

  throw new Response("Error loading user", { status: 500 });
}

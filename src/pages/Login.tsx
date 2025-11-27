import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../components/general/Button";
import { useLoginMutation } from "../api/AuthApi";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner";

const LoginSchema = z.object({
  email: z.email("El correo es invalido"),
  password: z
    .string("La contraseña es obligaria")
    .nonempty("La contraseña no puede estar vacía")
    .min(6, "La contraseña es muy corta"),
});

type LoginData = z.infer<typeof LoginSchema>;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
  });

  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();
  async function onSubmit(data: LoginData) {
    console.info(data);

    await login(data);
    if (!error) navigate("/");
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto my-12 rounded-md sm:p-12 p-5 flex flex-col sm:max-w-[30%] max-w-[50%] outer-neo"
    >
      <div className="flex flex-col gap-1">
        <label>Email</label>
        <input
          type="email"
          required
          {...register("email")}
          className="internal-neo [--shadow-color:#110f0e] [--box-shadow:#272320] p-2"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <label>Password</label>
        <input
          type="password"
          required
          {...register("password")}
          className="internal-neo [--shadow-color:#110f0e] [--box-shadow:#272320] p-2"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <Button text="Login" type="submit" variant="custom" color="#2d36e3" />
    </form>
  );
};

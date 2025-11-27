import z from "zod";
import {
  useCreateUserMutation,
  useEditUserMutation,
} from "../../../api/UserApi";
import { Input } from "../../general/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../general/Button";
import { useEffect } from "react";

const UserSchema = z.object({
  id: z.number(),
  name: z.string().nonempty("El nombre es obligatorio"),
  surname: z.string().nonempty("El apellido es obligatorio"),
  email: z.email("El email es erróneo"),
  password: z.string().nonempty("La contraseña es obligatoria"),
});

const formLabels: Record<string, string> = {
  name: "Nombre",
  surname: "Apellido",
  email: "Correo",
  password: "Contraseña",
};

const CreateUserSchema = UserSchema.omit({ id: true });
const EditUserSchema = UserSchema.partial().extend({ id: UserSchema.shape.id });

export type CreateUserData = z.infer<typeof CreateUserSchema>;
export type EditUserData = z.infer<typeof EditUserSchema>;

type FormData = CreateUserData | EditUserData;

export const UserForm = ({
  userData,
  cancelFunction,
  className,
}: {
  userData?: FormData;
  className?: string;
  cancelFunction?: () => void;
}) => {
  const [editUser, { error: errorOnEdit }] = useEditUserMutation();
  const [createUser, { error: errorOnCreate }] = useCreateUserMutation();
  const formSchema = userData ? EditUserSchema : CreateUserSchema;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: userData || undefined,
  });

  useEffect(() => {
    if (userData) reset(userData);
  }, [userData, reset]);

  async function submitForm(data: FormData) {
    console.log({ data, userData });
    if (userData === undefined) await createUser(data);
    else await editUser(data as EditUserData);

    if (errorOnEdit || errorOnCreate)
      console.error(errorOnEdit || errorOnCreate);
    reset();
  }

  return (
    <form
      className={`${className} internal-neo [--shadow-color:#110f0e] [--box-shadow:#272320] p-5 flex flex-col gap-5`}
      onSubmit={handleSubmit(submitForm)}
    >
      {Object.keys(formSchema.shape).map((key) => {
        if (key === "id") return null;
        return (
          <Input
            key={key}
            title={formLabels[key] || key}
            error={errors[key as keyof FormData]?.message}
            {...register(key as keyof FormData)}
          />
        );
      })}

      <div className={`grid  gap-2 ${cancelFunction && "grid-cols-2"}`}>
        {cancelFunction && (
          <Button
            type="button"
            text="Cancelar"
            variant="danger"
            onClick={() => {
              cancelFunction();
              reset();
            }}
          />
        )}
        <Button text="Guardar" type="submit" variant="custom" color="#147505" />
      </div>
    </form>
  );
};

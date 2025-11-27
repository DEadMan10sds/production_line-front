import type React from "react";

type InputProps = {
  title?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ title, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-[.5] w-full">
      {title && <label className="font-semibold w-full">{title}</label>}
      <input {...props} className="input-neo rounded-sm p-2 w-full" />
      {error && <p className="text-red-800">{error}</p>}
    </div>
  );
};

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@/context/useAuth";
import { useForm } from "react-hook-form";

type Props = {};
type LoginFormsInputs = {
  userName: string;
  password: string;
};

const validation = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().min(6).required(),
});

export default function LoginComp(props: Props) {
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: LoginFormsInputs) => {
    loginUser(form.userName, form.password);
  };

  return (
    <div className="w-full flex items-center justify-center lg:grid min-h-full lg:grid-cols-2 ">
      <div className="flex items-center justify-center py-12">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold text-black">Logga in</h1>
              <p className="text-balance text-muted-foreground">
                Skriv in din e-postadress nedan för att logga in på ditt konto.
              </p>
            </div>
            <div className="grid gap-4 text-black">
              <div className="grid gap-2">
                <Label htmlFor="username">Användarnamn</Label>
                <Input
                  id="username"
                  placeholder="användarnamn"
                  className="bg-transparent border-gray-600"
                  {...register("userName")}
                />
                {errors.userName ? <p className="text-red-700">{errors.userName.message}</p> : ""}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Lösenord</Label>
                  <a href="/forgot-password" className="ml-auto inline-block text-sm underline">
                    Glömt lösenord?
                  </a>
                </div>
                <Input
                  id="password"
                  className="bg-transparent border-gray-600 "
                  {...register("password")}
                />
                {errors.password ? <p className="text-red-700">{errors.password.message}</p> : ""}
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-black">
                Logga in
              </Button>
              <Button variant="ghost" className="w-full">
                Logga in med Github
              </Button>
            </div>
            <div className="mt-4 text-center text-sm text-black">
              Har du inget konto?{" "}
              <a href="/signup" className="underline">
                Bli medlem
              </a>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="/home1.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

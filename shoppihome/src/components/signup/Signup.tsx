"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@/context/useAuth";
import { useForm } from "react-hook-form";

enum Role {
  general = "general",
  admin = "admin",
  agent = "agent",
}

type RegisterFormsInputs = {
  email: string;
  userName: string;
  password: string;
  role: Role;
};

const validation = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  role: Yup.mixed<Role>()
    .oneOf([Role.admin, Role.agent, Role.general])
    .required("Role is required"),
});
export default function SignUp(): JSX.Element {
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: RegisterFormsInputs) => {
    registerUser(form.userName, form.email, form.password, form.role);
  };

  return (
    <Card className="mx-auto  max-w-lg bg-white text-black">
      <CardHeader>
        <CardTitle className="text-xl">Skapa konto</CardTitle>
        <CardDescription>Skriv in din information för att skapa ett konto</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="bg-transparent"
                id="email"
                type="email"
                placeholder="m@example.se"
                {...register("email")}
              />
              {errors.email ? <p className="text-white">{errors.email.message}</p> : ""}
            </div>
            <div className="grid gap-2">
              <div className="grid gap-2">
                <Label htmlFor="userName">Namn</Label>
                <Input
                  className="bg-transparent"
                  id="userName"
                  placeholder="Användarnamn"
                  {...register("userName")}
                />
                {errors.userName ? <p className="text-white">{errors.userName.message}</p> : ""}
              </div>
            </div>
            <div className="grid gap-2">
              <Label className="" htmlFor="password">
                Lösenord
              </Label>
              <Input
                className="bg-transparent"
                id="password"
                type="password"
                {...register("password")}
              />
              {errors.password ? <p className="text-white">{errors.password.message}</p> : ""}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Roll</Label>
              <select
                className="bg-transparent border border-gray-300 rounded-md p-2"
                id="role"
                {...register("role")}
              >
                <option value="">Välj roll</option>
                <option value="agent">Mäklare</option>
                <option value="admin">Admin</option>
                <option value="general">Användare</option>
              </select>
              {errors.role && <p className="text-red-500">{errors.role.message}</p>}
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Skapa ett konto
            </Button>
            <Button variant="ghost" className="w-full ">
              Skapa ett konto med Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Redan Medlem?{" "}
            <a href="login" className="underline">
              Logga in
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

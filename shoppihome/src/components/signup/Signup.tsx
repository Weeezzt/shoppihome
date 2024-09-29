"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUp(): JSX.Element {
  const [error, setError] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Invalid email");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
  };

  return (
    <Card className="mx-auto  max-w-lg bg-white text-black">
      <CardHeader>
        <CardTitle className="text-xl">Skapa konto</CardTitle>
        <CardDescription>Skriv in din information för att skapa ett konto</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Namn</Label>
                <Input
                  className="bg-transparent"
                  id="first-name"
                  placeholder="Handyplanit"
                  required
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="bg-transparent"
                id="email"
                type="email"
                placeholder="m@example.se"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label className="" htmlFor="password">
                Lösenord
              </Label>
              <Input
                className="bg-transparent"
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
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

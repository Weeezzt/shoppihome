"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginComp() {
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
  };

  return (
    <div className="w-full flex items-center justify-center lg:grid min-h-full lg:grid-cols-2 ">
      <div className="flex items-center justify-center py-12">
        <form onSubmit={handleSubmit}>
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold text-black">Logga in</h1>
              <p className="text-balance text-muted-foreground">
                Skriv in din e-postadress nedan för att logga in på ditt konto.
              </p>
            </div>
            <div className="grid gap-4 text-black">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  className="bg-transparent border-gray-600"
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                  type="password"
                  required
                  className="bg-transparent border-gray-600 "
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
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

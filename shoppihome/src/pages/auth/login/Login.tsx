import LoginComp from "@/components/login/LoginComp";
import Header from "@/components/Header";
export default function Login() {
  return (
    <div className="flex flex-col max-h-screen">
      <Header />
      <main className="bg-gray-100">
        <LoginComp />
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

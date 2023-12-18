import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@app/app/api/auth/[...nextauth]/route"
import LoginForm from "../components/LoginForm";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <div>
      <LoginForm />
    </div>
  );
}
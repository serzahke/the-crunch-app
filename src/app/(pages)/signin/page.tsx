import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/options"
import LoginForm from "@/components/LoginForm";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <div>
      <LoginForm />
    </div>
  );
}
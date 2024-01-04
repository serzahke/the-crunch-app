import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/options"
import RegisterForm from "@/components/RegisterForm";

export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <div>
      <RegisterForm />
    </div>
  );
}
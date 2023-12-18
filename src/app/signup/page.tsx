import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@app/app/api/auth/[...nextauth]/route"
import RegisterForm from "@app/app/components/RegisterForm";

export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <div>
      <RegisterForm />
    </div>
  );
}
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@app/app/api/auth/[...nextauth]/options"
import RegisterForm from "@app/app/components/RegisterForm";

export default async function Register({ params }: { params: { slug: string } }) {
  const session = await getServerSession(authOptions);

  console.log('params.slug', params.slug)

  if (session) redirect("/dashboard");
  
  return (
    <div>
      <RegisterForm organizationId={params.slug}/>
    </div>
  );
}
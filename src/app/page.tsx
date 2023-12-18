// import { options } from "./api/auth/[...nextauth]/options"
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next"
import Link from "next/link"
import FeatureList from "./components/home/FeatureList"
import LoginForm from "./components/LoginForm";

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <>
      {session ? (
        <div className="flex flex-col gap-6">
          {pageContent}
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {/* <LoginForm /> */}
          {pageContent}
        </div>
      )}
    </>
  )
}

const pageContent = (
  <div className="flex flex-col gap-10">
    <div className="flex flex-row justify-center p-10">
      <div className="flex flex-col gap-6 w-3/4 text-center p-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">ONE PLATFORM TO MANAGE ALL OF YOUR IN-STORE OPERATIONS</h1>
          <p className="text-4xl font-medium">Designed to help hospitality businesses like yours control costs & increase profitability.</p>
        </div>
        <div className="flex flex-row gap-4 justify-center">
          <Link className="btn btn-primary " href={'/'}>Chat with us!</Link>
          <Link className="btn btn-outline btn-primary" href={'/'}>Request a demo</Link>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start p-10">
      <div>
        <h2 className="text-2xl font-medium">Get Started Fast</h2>
        <FeatureList />
      </div>
    </div>
    <div className="flex flex-col justify-start p-10">
      <div>
        <h2 className="text-2xl font-medium">Case Study: Black Rock</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    <div className="flex flex-col justify-start p-10">
      <div>
        <h2 className="text-2xl font-medium">Seamlessly sync all your current systems, from POS to accounting & payroll.</h2>
      </div>
    </div>
  </div>
)
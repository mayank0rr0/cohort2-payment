import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
import { Landing } from "../components/Landing";

export default async function Home() {
  // const session = await getServerSession(authOptions);

  // if (session?.user) {
  //   redirect('/dashboard')
  // }

  // OF NO USE THE USER WILL BE REDIRECTED ANYHOW
  return (
  <div className="h-full w-full">
    <Landing />
  </div> 
  );
}

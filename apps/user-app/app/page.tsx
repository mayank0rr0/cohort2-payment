import { PageHead } from "@repo/ui/PageHead"
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect('/dashboard')
  } else {
    redirect('/api/auth/signin')
  }

  // OF NO USE THE USER WILL BE REDIRECTED ANYHOW
  return (
  <div>
    <div className="flex justify-center text-center bg-amber-300">
      <PageHead name="Home"/>
    </div>
  </div> 
  );
}

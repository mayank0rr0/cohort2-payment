import { prisma } from "@repo/db";
import Smart  from "@repo/ui/smart";

export default async function Home() {
  console.log("started");
  const user = await prisma.user.findFirst();
  console.log(user);

  return (
  <div>
    <Smart />
    <div className="flex justify-center text-center bg-amber-300">
      App Element
    </div>
    <div className="text-6xl">
      {user?.name ?? "No user added yet"}
    </div>
  </div> 
  );
}

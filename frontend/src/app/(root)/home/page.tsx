import { auth } from "@/auth"
import Sidebar from "@/components/Sidebar";

export default async function Home() {
  const session = await auth();
  if (!session?.user) return <div>NAH</div>
  
  return (
    <div className="flex">
      <Sidebar 
        userName={session.user.name}
        userEmail={session.user.email}
        userImage={session.user.image}
      />
      <div>MAIN CONTENT</div>
    </div>
  )
}

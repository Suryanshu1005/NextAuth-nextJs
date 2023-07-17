import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "./components/UserCard"

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
      <div>
        {session ? (
          <UserCard user={session?.user} pageType={"Home"} />
        ) : (
          <h1 className="text-5xl">You Shall Not Pass!</h1>
        )}
      </div>
    </>
  )
}
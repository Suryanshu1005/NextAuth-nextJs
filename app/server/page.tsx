import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from 'next/navigation'
import UserCard from "@/app/components/UserCard";

export default async function ServerPage() {
    const session = await getServerSession(options);

    if(!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
    }

    return(
        <section>
            <UserCard user={session?.user} pageType={"Server"} />
        </section>
    )
}
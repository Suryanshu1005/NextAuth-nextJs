'use client'

import { redirect } from "next/navigation";
import UserCard from "@/app/components/UserCard";
import { useSession } from "next-auth/react";

const AboutUs = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/about-us')
        },

    })

    return (
        <>
                <section>
                    <UserCard user={session?.user} pageType="About-Us" />
                </section>
        </>
    )
}

export default AboutUs;
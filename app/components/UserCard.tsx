import Image from "next/image"

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

type Props = {
    user: User,
    pageType: string
}

export default function Card({ user, pageType }: Props) {
    const greeting = user?.name ? (
        <div>
            Hello {user?.name}!!!
        </div>
    ) : null

    const userImage = user?.image ? (
        <div>
            <Image
                className="rounded-full object-fill"
                src={user?.image}
                alt={user?.name ?? "Profile Pic"}
                width={200}
                height={200}
                priority={true}
            />
        </div>
    ) : null

    return (
        <div>
            <section>
                {greeting}

                {userImage}

                <p className="text-2xl text-center">{pageType} Page!</p>
            </section>
        </div>
    )
}

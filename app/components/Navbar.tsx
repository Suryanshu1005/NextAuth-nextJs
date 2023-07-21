import { getServerSession } from "next-auth";
import Link from "next/link"
import { options } from "../api/auth/[...nextauth]/options";

const Navbar = async () => {
    const session = await getServerSession(options)
    return (
        <nav className="bg-slate-500 m-10 border-red-600 rounded-md ">
            <ul className="flex justify-center gap-4 m-10 p-5">
                <li><Link href="/">Home</Link></li>
                <li><Link href='/about-us'>About us</Link></li>
                <li><Link href='/server'>Server</Link></li>
                <li><Link href='/api/auth/signin'>Login</Link></li>
                {session ? (
                    <>
                        <li><Link href='/api/auth/signout'>Logout</Link></li>
                    </>
                ) : (
                    ''
                ) }

                <li><Link href='/extra'>Extra</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
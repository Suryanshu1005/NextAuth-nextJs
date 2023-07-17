import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="bg-slate-500 m-10 border-red-600 rounded-md ">
            <ul className="flex justify-center gap-4 m-10 p-5">
                <li><Link href="/">Home</Link></li>
                <li><Link href='/about-us'>About us</Link></li>
                <li><Link href='/server'>Server</Link></li>
                <li><Link href='/api/auth/signin'>Login</Link></li>
                <li><Link href='/api/auth/signout'>Logout</Link></li>
                <li><Link href='/extra'>Extra</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
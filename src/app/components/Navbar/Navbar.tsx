import Link from "next/link"
import SigninButton from "./SigninButton"
import ThemeController from "./ThemeController"
import Image from "next/image"
import logo from "@app/assets/svg/Logo.svg"


export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 sticky top-0 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href="/about-us">About us</Link></li>
                            <li><Link href="/contact-us">Contact</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="px-6">
                        <Image src={logo} className="h-10" alt="logo" />
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/about-us">About us</Link></li>
                        <li><Link href="/contact-us">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end flex flex-row gap-10">
                    <ThemeController />
                    <SigninButton />
                </div>
            </div>
        </>
    )
}


'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";


export default function Navbar() {
  let currentPath = usePathname();
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-gradient-to-r from-cyan-100 to-blue-100">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn bg-gradient-to-r from-cyan-100 to-blue-100" onClick={() => setNavbar(!navbar)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 hover:bg-cyan-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className={`menu menu-md text-lg dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <li>
                <Link className={`hover:text-cyan-400 ${
                    currentPath==='/' ? "bg-cyan-200" : ""
                }`} href="/">Home</Link>
              </li>
              <li>
                <Link className={`hover:bg-cyan-400 ${
                    currentPath==='/blog' ? "bg-cyan-200" : ""
                }`} href={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link className={`hover:bg-cyan-300 ${
                    currentPath==='/about' ? "bg-cyan-200" : ""
                }`} href="/about">About</Link>
              </li>
              <li>
                <Link className={`hover:bg-cyan-400 ${
                    currentPath==='/contact' ? "bg-cyan-200" : ""
                }`} href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <img className="text-2xl max-h-12 mr-3 w-20 border-2 border-cyan-200 z-51" src="/images/logo.png" alt="Logo"/>
        </div>
        <div className="hidden lg:flex lg:mx-auto lg:flex-row">
          <ul className="menu menu-horizontal text-xl font-semibold">
            <li>
              <Link className={`hover:text-cyan-300 hover:underline ${
                  currentPath==='/' ? "bg-cyan-200" : ""
              }`} href="/">Home</Link>
            </li>
            <li >
                <Link className={`hover:text-cyan-300 hover:underline ${
                    currentPath==='/blog' ? "bg-cyan-200" : ""
                }`} href={"/blog"}>Blog</Link>

            </li>
            <li>
              <Link className={`hover:text-cyan-300 hover:underline ${
                  currentPath==='/about' ? "bg-cyan-200" : ""
              }`} href={"/about"}>About</Link>
            </li>
            <li>
              <Link className={`hover:text-cyan-300 hover:underline ${
                  currentPath==='/contact' ? "bg-cyan-200" : ""
              }`} href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

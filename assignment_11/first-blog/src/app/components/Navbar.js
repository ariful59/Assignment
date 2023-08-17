'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";


export default function Navbar() {
  let currentPath = usePathname();
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm text-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className={currentPath==='/' && "bg-blue-400"} href="/">Home</Link>
              </li>
              <li>
                <Link className={currentPath==='/blog' && "bg-blue-400"} href={"/blog"}>Blog</Link>
                {/*<ul className="p-2">*/}
                {/*  /!*<li>*!/*/}
                {/*  /!*  <Link className={currentPath==='/blog' && "bg-blue-400"} href={"/blog"}>Technology</Link>*!/*/}
                {/*  /!*</li>*!/*/}
                {/*  /!*<li>*!/*/}
                {/*  /!*  <Link className={currentPath==='/blog' && "bg-blue-400"} href={"/blog"}>Fun Fact</Link>*!/*/}
                {/*  /!*</li>*!/*/}
                {/*</ul>*/}
              </li>
              <li>
                <Link className={currentPath==='/about' && "bg-blue-400"} href="/about">About</Link>
              </li>
            </ul>
          </div>
          <img className="text-xl" src="/images/favicon.ico" class="h-8 mr-3" alt="Logo"/>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">Md Ariful Amin</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className={currentPath==='/' && "bg-blue-400"} href="/">Home</Link>
            </li>
            <li >
                <Link className={currentPath==='/blog' && "bg-blue-400"} href={"/blog"}>Blog</Link>
                {/*<ul className="p-2">*/}
                {/*  /!*<li>*!/*/}
                {/*  /!*  <Link className={currentPath==='/blog' && "bg-blue-400"} href={"/blog"}>Technology</Link>*!/*/}
                {/*  /!*</li>*!/*/}
                {/*  /!*<li>*!/*/}
                {/*  /!*  <Link className={currentPath==='/blog' && "bg-blue-400"} href={"/blog"}>Fun Fact</Link>*!/*/}
                {/*  /!*</li>*!/*/}
                {/*</ul>*/}

            </li>
            <li>
              <Link className={currentPath==='/about' && "bg-blue-400"} href={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import {faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
function Header() {
  const menu = <FontAwesomeIcon icon={faBars} className="cursor-pointer text-xl"/>
  return (
    <div className="sticky top-0 backdrop-blur-md flex py-6 lg:px-10 px-5 text-black justify-between">
      <h1 className="text-xl lg:text-2xl font-semibold self-center">Diagnosys Assist</h1>
      <ul className="hidden lg:flex gap-x-4 self-center font-medium text-lg">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </ul>
      <div className="hidden lg:flex gap-x-4">
        <Link
          href="/auth/login"
          className="text-lg border-2 border-slate-500 px-8 py-2 text-black font-semibold rounded-lg"
        >
          Login
        </Link>
        <Link
          href="/auth/register"
          className="text-lg bg-blue-500 px-8 py-2 font-semibold rounded-lg text-white"
        >
          Sign Up
        </Link>
      </div>
      <div className="lg:hidden self-center">{menu}</div>
    </div>
  );
}

export default Header;

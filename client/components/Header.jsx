import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
function Header() {
  const bars = (
    <FontAwesomeIcon icon={faBars} className="cursor-pointer self-center" />
  );
  const profile = (
    <FontAwesomeIcon
      icon={faUser}
      className="cursor-pointer self-center px-3"
    />
  );

  return (
    <header className="fixed top-0 z-20 bg-deepGreen text-white  py-4 border-b-2 w-full flex justify-between lg:px-20 px-5">
      {/* Logo */}
      <h1 className="self-center lg:text-lg font-medium text-lightGray">
        Diagnosys
      </h1>
      <ul className="hidden lg:flex space-x-8 text-sm self-center">
        <li className="hover:border-b-4 border-green-600 duration-100">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:border-b-4 border-green-600 duration-100">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:border-b-4 border-green-600 duration-100">
          <Link href="/services">Services</Link>
        </li>
        <li className="hover:border-b-4 border-green-600 duration-100">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:border-b-4 border-green-600 duration-100">
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
      <button className="hidden lg:block hover:scale-105 text-sm duration-300 cursor-pointer rounded-md bg-green-600 text-white px-3 py-2.5 font-medium">
        <Link href="/auth/">Account{profile}</Link>
      </button>
      <div className="lg:hidden">{bars}</div>
    </header>
  );
}

export default Header;

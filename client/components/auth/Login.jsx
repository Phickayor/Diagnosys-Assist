import { faClose, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
function Login() {

  const email = (
    <FontAwesomeIcon icon={faEnvelope} className="self-center text-blue-500" />
  );

  const lock = (
    <FontAwesomeIcon icon={faLock} className="self-center text-blue-500" />
  );
  return (
    <div className="fixed -z-20 bg-slate-200  top-0 left-0 h-screen w-screen flex flex-col justify-center">
      <div className="mx-auto space-y-4 bg-white/100 text-black w-96 p-5 rounded-2xl">
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold my-2 text-2xl">Sign In</h1>
            <p>Please enter your details</p>
          </div>
        </div>
        <form className="space-y-3 flex flex-col">
          <div className="flex flex-col space-y-2 ">
            <label className="text-sm font-semibold">Email address</label>
            <div className="border-2 rounded-2xl px-3 py-1.5  border-slate-600/50 space-x-4 flex w-full">
              {email}
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="johndoe@gmail.com"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            <label className="text-sm font-semibold">Password</label>
            <div className="border-2 rounded-2xl px-3 py-1.5  border-slate-600/50 space-x-4 flex w-full">
              {lock}
              <input
                minLength={8}
                type="password"
                className="w-full focus:outline-none"
                placeholder="Your Password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white w-11/12 font-semibold py-2 mx-auto self-center rounded-3xl"
          >
            Sign In
          </button>
        </form>
        <p className="text-center">
          Don't have an account ?
          <Link href="/auth/register" className="text-blue-500 cursor-pointer">
            &nbsp;Register
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Login;

import baseurl from "@/config/host";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  var values = {
    email: null,
    pswd: null
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    var options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values })
    };
    try {
      const res = await fetch(`${baseurl}/users/login`, options);
      const data = await res.json();
      data.token != null ? toast.success("correct password") : toast.error(data.message);
    } catch (error) {
      toast.warning(
        "Something went wrong:\n Check your internet connection and try again."
      );
    }
  };
  const email = (
    <FontAwesomeIcon icon={faEnvelope} className="self-center text-blue-500" />
  );

  const lock = (
    <FontAwesomeIcon icon={faLock} className="self-center text-blue-500" />
  );
  return (
    <div className="fixed -z-10 bg-slate-200  top-0 left-0 h-screen w-screen flex flex-col justify-center">
      <div className="mx-auto space-y-4 lg:mt-20 lg:bg-[#F8F8F8] text-black w-11/12 lg:w-96 p-5 rounded-2xl">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold my-2 text-2xl">Sign In</h1>
            <p>Please enter your details</p>
          </div>
        </div>
        <form className="space-y-3 flex flex-col" onSubmit={HandleSubmit}>
          <div className="flex flex-col space-y-2 ">
            <label className="text-sm font-semibold">Email address</label>
            <div className="border-2 rounded-2xl px-3 py-1.5  border-slate-600/50 space-x-4 flex w-full">
              {email}
              <input
                required
                type="text"
                className="bg-inherit w-full focus:outline-none"
                placeholder="johndoe@gmail.com"
                onChange={(e) => {
                  values.email = e.target.value;
                }}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            <label className="text-sm font-semibold">Password</label>
            <div className="border-2 rounded-2xl px-3 py-1.5  border-slate-600/50 space-x-4 flex w-full">
              {lock}
              <input
                required
                minLength={8}
                type="password"
                className="bg-inherit w-full focus:outline-none"
                placeholder="Your Password"
                onChange={(e) => {
                  values.pswd = e.target.value;
                }}
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

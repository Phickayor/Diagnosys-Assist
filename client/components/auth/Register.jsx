import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
function Register() {
  var values = {
    name: null,
    email: null,
    pswd: null
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    if(values.pswd!=pswd2){
    var options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values })
    };

    try {
      const res = await fetch(`${baseurl}/users/login`, options);
      const data = await res.json();
      data.success ? alert("registered") : alert("failed registration");
    } catch (error) {
      alert(
        "Something went wrong:\n Check your internet connection and try again."
      );
    }
  }else{
    console.log('passwords do not match')
  }
  };
  const [pswd2, setPswd2] = useState(false)
  const user = (
    <FontAwesomeIcon icon={faUser} className="self-center text-blue-500" />
  );
  const email = (
    <FontAwesomeIcon icon={faEnvelope} className="self-center text-blue-500" />
  );

  const lock = (
    <FontAwesomeIcon icon={faLock} className="self-center text-blue-500" />
  );

  return (
    <div className="fixed bg-slate-200 -z-10 top-0 left-0 h-screen w-screen flex flex-col justify-center">
      <div className="mx-auto w-11/12 space-y-4 lg:mt-20 lg:bg-[#F8F8F8] text-black border-2  lg:w-3/5 p-5 rounded-2xl">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold my-2 text-2xl">Sign Up</h1>
            <p>Please enter your details</p>
          </div>
        </div>
        <form
          onSubmit={HandleSubmit}
          className="space-y-3 lg:space-y-0 flex lg:grid grid-cols-2 lg:gap-6  flex-col"
        >
          <div className="flex flex-col space-y-2 ">
            <label className="text-sm font-semibold">Name</label>
            <div className="border-2 rounded-2xl px-3 py-1.5  border-slate-600/50 space-x-4 flex w-full">
              {user}
              <input
                type="text"
                required
                autoFocus
                className="bg-inherit w-full focus:outline-none"
                placeholder="John Doe"
                onChange={(e) => {
                  values.name = e.target.value;
                }}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            <label className="text-sm font-semibold">Email address</label>
            <div className="border-2 rounded-2xl px-3 py-1.5  border-slate-600/50 space-x-4 flex w-full">
              {email}
              <input
                type="text"
                required
                autoFocus
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
                placeholder="Your Password ..."
                onChange={(e) => {
                  values.pswd = e.target.value;
                }}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            <label className="text-sm font-semibold">Confirm Password</label>
            <div className="border-2 rounded-2xl px-3 py-1.5  border-slate-600/50 space-x-4 flex w-full">
              {lock}
              <input
                required
                minLength={8}
                type="password"
                className="bg-inherit w-full focus:outline-none"
                placeholder="Repeat Password ..."
                onChange={(e) => {
                  setPswd2(e.target.value)
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="col-span-2 bg-blue-500 text-white md:w-fit w-11/12 my-5 font-semibold py-2 lg:px-10 mx-auto self-center rounded-xl"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center">
          Already have an account ?{" "}
          <Link href="/auth/login" className="text-blue-500 cursor-pointer">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Register;

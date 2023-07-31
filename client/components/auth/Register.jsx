import { faClose, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
function Register() {
  const registerContainer = useRef(null);
  const HandleDisplay = () => {
    registerContainer.current.classList.toggle("hidden");
  };
  const close = (
    <FontAwesomeIcon
      icon={faClose}
      className="text-xl cursor-pointer hover:scale-110"
      onClick={HandleDisplay}
    />
  );
  const email = <FontAwesomeIcon icon={faEnvelope} className="self-center text-blue-500" />;

  const lock = (
    <FontAwesomeIcon icon={faLock} className="self-center text-blue-500" />
  );

  return (
    <div
      ref={registerContainer}
      className="fixed top-0 left-0 h-screen w-screen flex flex-col justify-center"
    >
      <div className="mx-auto space-y-4 bg-white/100 text-black w-96 p-5 rounded-2xl">
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold text-2xl">Sign Up</h1>
            <p>Please enter your details</p>
          </div>
          {close}
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
                placeholder="Your Password ..."
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            <label className="text-sm font-semibold">Confirm Password</label>
            <div className="border-2 rounded-2xl px-3 py-1.5  border-slate-600/50 space-x-4 flex w-full">
              {lock}
              <input
                minLength={8}
                type="password"
                className="w-full focus:outline-none"
                placeholder="Repeat Password ..."
              />
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white w-11/12 font-semibold py-2 mx-auto self-center rounded-3xl">
            Sign Up
          </button>
        </form>
        <p className="text-center">
          Already have an account ?{" "}
          <span className="text-blue-500 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
}
export default Register;

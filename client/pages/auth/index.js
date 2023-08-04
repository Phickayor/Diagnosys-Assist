import baseurl from "@/config/host";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Home() {
  var token;
  const [info, setInfo] = useState(null);
  const [IsAuthorized, setIsAuthorized] = useState(false);
  const ConfirmToken = async () => {
    var options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token })
    };

    try {
      const res = await fetch(`${baseurl}/users/verifytoken`, options);
      const data = await res.json();
      data.success
        ? (setInfo(data.user_token), setIsAuthorized(true))
        : (console.error(data.message),
          setIsAuthorized(false),
          Router.push({
            pathname: "/auth/login"
          }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      token = localStorage.getItem("token");
      ConfirmToken();
    }, 3000);
  }, []);

  return IsAuthorized ? (
    <>
      <div>{info.name}</div>
    </>
  ) : (
    <FontAwesomeIcon
      icon={faSpinner}
      className="text-2xl text-blue-500 absolute left-1/2 top-1/2 fa-spin"
    />
  );
}

export default Home;

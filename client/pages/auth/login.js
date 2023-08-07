import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Login from "@/components/auth/Login";
import React from "react";
function login() {
  return (
    <main className="min-h-screen">
      <Background />
      <Header />
      <div className=" mx-auto w-11/12 py-10 space-y-5">
        <Login />
        <Footer />
      </div>
    </main>
  );
}

export default login;

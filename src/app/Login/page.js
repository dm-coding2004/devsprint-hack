"use client";
import React from "react";
import Header from "../components/Header";
import Login from "./components/Login";
import LoginHeader from "./components/LoginHeader";
import LoginFooter from "./components/LoginFooter";

function page() {
  return (
    <>
      <LoginHeader />
      <Login />
    </>
  );
}

export default page;

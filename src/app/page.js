"use client";
import { useEffect, useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const phoneNumber = localStorage.getItem("phoneNumber");
    const userUID = localStorage.getItem("userUID");
    const userIDs = { phoneNumber, userUID };

    console.log(userIDs);
    if (
      (userUID !== "" && userUID !== null) &&
      (phoneNumber !== "" && phoneNumber !== null)
    ) {
      setUser(userIDs);
    }
  }, []);
  return (
    <>
      <Header user={user} />
      <Body />
      <Footer />
    </>
  );
}

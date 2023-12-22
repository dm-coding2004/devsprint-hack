import React, { useEffect, useRef, useState } from "react";
import { app, auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/navigation";

function Login() {
  const [reVer, setReVer] = useState(null);
  const [conRes, setConRes] = useState(null);
  const [number, setNumber] = useState("+91");
  const [code, setCode] = useState("");
  const [footer, setFooter] = useState(
    "Login to retain your progress! Thank you 😀"
  );
  const buttonRef = useRef(null);
  const router = useRouter();

  async function onSignInSubmit(e) {
    e.preventDefault();
    if (reVer !== null) {
      setFooter("Verfiying your Number...!!");
      await signInWithPhoneNumber(auth, number, reVer)
        .then((confirmationResult) => {
          setConRes(confirmationResult);
          setFooter("Sending your OTP Code...!!");
        })
        .catch((error) => {
          setFooter("Technical Error, please try again later...!");
          console.log(error);
        });
    }
  }

  async function verfiyNumber(e) {
    e.preventDefault();
    if (conRes !== null) {
      setFooter("Verifying your Code!!!");
      await conRes
        .confirm(code)
        .then((result) => {
          const user = result.user;
          setFooter("Your Code has been Verifyed, Welcome to Sahay!");
          localStorage.setItem("phoneNumber", user.phoneNumber);
          localStorage.setItem("userUID", user.uid);
          console.log(user);
        })
        .catch((error) => {
          setFooter("Sorry, Wrong Code!");
          console.log(error);
        });
    }
  }
  useEffect(() => {
    const reCaVer = new RecaptchaVerifier(auth, buttonRef.current, {
      size: "invisible",
      callback: (response) => {
        console.log("Hii");
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      },
    });
    setReVer(reCaVer);
    console.log("Done");
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-[90vh] bg-green-800">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-3xl font-semibold mb-6 text-center cursor-default">
            Login/SignUp
          </h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="OTP"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <button
              ref={buttonRef}
              onClick={onSignInSubmit}
              className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-blue active:bg-green-900"
            >
              Send OTP
            </button>
            <button
              onClick={verfiyNumber}
              className="w-full bg-white text-green-500 border-2 border-green-500 p-3 rounded hover:bg-gray-200 focus:outline-none focus:shadow-outline-blue "
            >
              Verify Number
            </button>
          </form>
          <div className="mt-6 text-center"></div>
        </div>
      </div>
      <footer className="bg-[#2a3439] text-white max-w-full lg:h-auto py-10 h-full top-0 lg:mt-[-22px] flex  items-center justify-center ">
        <div className="mr-auto ml-auto max-h-full max-w-[1300px] pr-4 pl-4  md:flex flex-col items-center justify-center ">
          <h1 className="text-white text-sm lg:text-3xl font-semibold">
            {footer}
          </h1>
        </div>
      </footer>
    </>
  );
}

export default Login;

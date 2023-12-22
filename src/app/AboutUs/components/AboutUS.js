'use client';
import React from "react";

function Aboutus() {
  return (
    <>
      <div className="bg-[#0b7261] pb-20 cursor-default">
      <header className="bg-white-400 text-black p-4">
        <h1 className="text-3xl text-center font-semibold underline">About Us</h1>
      </header>

      <section className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">We Are</h2>
        <p className="text-gray-700">
      Darkmode a dedicated team of programmers whose sole goal is to make a bgd
        </p>
      </section>

      <section className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          ...............
        </p>
      </section>

      <section className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions, feel free to ask <a href="mailto:someone@gmail.com" className="text-blue-500">someone@gmail.com</a>.
        </p>
      </section>

    
    </div>

    </>
  );
}

export default Aboutus;
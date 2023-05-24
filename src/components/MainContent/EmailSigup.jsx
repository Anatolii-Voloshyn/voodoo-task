import React, { useState } from "react";

export const EmailSignup = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <div className="flex items-center">
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="E-mail"
        className="
          h-11
          md:w-[518px]
          rounded
          px-6
          py-2
          focus:outline-none
          focus:ring-2
          focus:ring-orange-500"
      />
      <button
        onClick={handleSubmit}
        className="
          flex
          items-center
          justify-center
          h-11
          bg-orange-500
          font-bold
          p-4
          box-border
          rounded
          ml-3
          transition
          ease-in-out
          duration-0
          hover:-translate-y-1
          hover:scale-110
          duration-300"
      >
        Sign-up
      </button>
    </div>
  );
};
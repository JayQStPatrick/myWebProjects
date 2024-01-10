import React, { useState } from "react";
import Navbar from "../../navbar";
import googleLogo from "../assets/googlemain.png";
import Footer from "./footer";

const Login = () => {
  const [loginSubmitted, setloginSubmitted] = useState(false);
  const [successLogin, setSuccessLogin] = useState(false);

  const handleUserLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle successful response
      // const data = await response.json();
      // console.log("Success:", data);
      setloginSubmitted(true);
      setSuccessLogin(true);

      // Add a 5-second delay before redirecting
      setTimeout(() => {
        window.location.href = "profile";
      }, 5000);
    } catch (error) {}
  };
  return (
    <div>
      <Navbar />
      {/* Login form*/}
      <div className="mx-auto w-1/2 p-12">
        {/* Login Form header*/}
        <div className="">
          <h2 className="text-center text-3xl">Login</h2>
        </div>
        {/* Login form*/}
        <div className="mt-8 md:w-3/4 md:mx-auto bg-light_blue_grey rounded-lg">
          <form
            action="#"
            method="GET"
            className="p-4"
            onSubmit={handleUserLogin}
          >
            {loginSubmitted && (
              <div>
                {successLogin ? (
                  <p className="bg-active-green text-white text-center">
                    You are now logged in
                  </p>
                ) : (
                  <p className="bg-active-red text-white text-center">
                    Incorrect Login Details
                  </p>
                )}
              </div>
            )}
            <div class="mb-4 text-black">
              <label for="email" class="block font-medium">
                Email
              </label>
              <input
                type="email"
                id="logemail"
                name="logemail"
                placeholder="john.doe@example.com"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div class="mb-4 text-black">
              <label for="password" class="block font-medium">
                Password
              </label>
              <input
                type="password"
                id="logpassword"
                name="logpassword"
                placeholder="Input your last registered Password"
                class="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                class="px-4 py-2 bg-navy_blue_home text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 text-center">
          <p>
            Forgot Password? <span>Click Here</span>
          </p>
        </div>
        {/* Content below form*/}
        <div className="mt-8 text-center">
          <p>
            Already have an account? <span>Log In</span>
          </p>
        </div>
        <div className="mt-4">
          <h3 className="relative text-center before:content:[''] before:block before:w-2/6 before:h-2 before:bg-active-green before:absolute before:left-0 before:my-auto before:z-[-2] after:content:[''] after:block after:w-2/6 after:h-2 after:bg-active-green after:absolute after:right-0 after:my-auto after:z-[-2]">
            <span className="absolute mt-[-15px] ml-[-12px] text-2xl">Or</span>
          </h3>
        </div>
        <div class="mt-14 md:w-3/4 md:mx-auto text-center relative">
          <div className="w-6 h-6 mt-3 ml-[10px] md:w-9 md:h-9 md:mt-1 md:ml-[20px] absolute">
            <img src={googleLogo} alt="google" />
          </div>
          <button
            type="submit"
            class="px-5 py-2 border-solid border-2 border-navy_blue_home w-full bg-pure-white text-navy_blue_home rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Sign Up with Google
          </button>
        </div>
        <div className="text-center mt-4">
          <p>
            By Signing up you agree with the company's Terms of Use Privacy
            Policy
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

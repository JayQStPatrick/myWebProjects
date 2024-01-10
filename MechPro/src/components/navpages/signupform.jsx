import React, { useState } from "react";
import googleLogo from "../assets/googlemain.png";
// import Axios from "axios";

const Signupform = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [successMech, setSuccessMech] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    address: "",
    company: "",
    password: "",
    password_confirmation: "",
  });

  const handleUserSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle successful response
      const data = await response.json();
      console.log("Success:", data);
      setFormSubmitted(true);
      setSuccessSubmit(true);

      // Add a 5-second delay before redirecting
      setTimeout(() => {
        window.location.href = "login";
      }, 5000);
    } catch (error) {}
  };

  const handleMechSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/mechanic/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle successful response
      const data = await response.json();
      console.log("Success:", data);
      setFormSubmitted(true);
      setSuccessMech(true);

      // Add a 5-second delay before redirecting
      setTimeout(() => {
        window.location.href = "login";
      }, 5000);
    } catch (error) {}
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="md:flex p-12">
        {/* Sign up form for Customers Only*/}
        <div className="mx-auto w-2/5 mt-8">
          {/* Sign up form header*/}
          <div>
            <h2 className="text-center text-3xl">Sign Up as User</h2>
          </div>
          {/* Sign up form*/}
          <div className="mt-8 md:w-3/4 md:mx-auto bg-light_blue_grey rounded-lg">
            <form method="POST" className="p-4 " onSubmit={handleUserSubmit}>
              {formSubmitted && (
                <div>
                  {successSubmit ? (
                    <p className="bg-active-green text-white text-center">
                      Succesfull Registeration
                    </p>
                  ) : (
                    <p className="bg-active-red text-white text-center">
                      Registeration Failed
                    </p>
                  )}
                </div>
              )}
              <div class="mb-4">
                <label for="fullname" class="block font-medium">
                  Fullname
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="John Doe"
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="email" class="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="password" class="block font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password should have 8 to 16 characters with at least one symbol"
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="password" class="block font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  placeholder="Re-type Password"
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  class="px-4 py-2 bg-navy_blue_home text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          {/* Content below form*/}
          <div className="mt-8 text-center">
            <p>
              Already have an account? <span>Log In</span>
            </p>
          </div>
          <div className="mt-4">
            <h3 className="relative text-center before:content:[''] before:block before:w-2/6 before:h-2 before:bg-active-green before:absolute before:left-0 before:my-auto before:z-[-2] after:content:[''] after:block after:w-2/6 after:h-2 after:bg-active-green after:absolute after:right-0 after:my-auto after:z-[-2]">
              <span className="absolute mt-[-15px] ml-[-12px] text-2xl">
                Or
              </span>
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
        {/* Sign up form for Mechanics Only*/}
        <div className="mx-auto w-2/5 mt-8">
          {/* Sign up form header*/}
          <div className="">
            <h2 className="text-center text-3xl">Sign Up as Mechanic</h2>
          </div>
          {/* Sign up form*/}
          <div className="mt-8 md:w-3/4 md:mx-auto bg-light_blue_grey rounded-lg">
            <form method="POST" className="p-4" onSubmit={handleMechSubmit}>
              {formSubmitted && (
                <div>
                  {successMech ? (
                    <p className="bg-active-green text-white text-center">
                      Succesfull Registeration
                    </p>
                  ) : (
                    <p className="bg-active-red text-white text-center">
                      Registeration Failed
                    </p>
                  )}
                </div>
              )}
              <div class="mb-4">
                <label for="name" class="block font-medium">
                  Fullname
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="John Doe"
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="name" class="block font-medium">
                  Workshop/Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Innosson Motors"
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="name" class="block font-medium">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder=""
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="email" class="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="password" class="block font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password should have 8 to 16 characters with at least one symbol"
                  class="w-full py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="password" class="block font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password_confirmation"
                  placeholder="Re-type Password"
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  class="px-4 py-2 bg-navy_blue_home text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8 text-center">
            <p>
              Already have an account? <span>Log In</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signupform;

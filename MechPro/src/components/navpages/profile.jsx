import React, { useState } from "react";
import Navbar from "../../navbar";
import Mechdp from "../assets/mech1.png";
import Userdp from "../assets/User1.png";
import Footer from "./footer";

const Profile = () => {
  const [formData, setFormData] = useState({
    search: "",
  });

  const handleUserSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/search-mechanics",
        {
          method: "GET",
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
    } catch (error) {
      // console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div class="md:flex md:w-full p-8">
        {/* Filter Section */}
        <div className="mx-auto w-3/4 mt-6 bg-light_blue_grey rounded-lg py-8 md:w-1/4">
          {/* Filter Action Buttons */}
          <div className="mx-auto w-3/4">
            <div className="flex justify-between ">
              <p className="mt-10 mb-5 text-lg font-medium text-start text-navy_blue_home">
                Filter
              </p>
              <p className="mt-10 mb-5 text-lg font-medium text-start text-active-red">
                Clear All
              </p>
            </div>
            {/* Filter Dropdown Menu */}
            <div className="">
              <p className="text-lg font-medium :text-start text-navy_blue_home">
                Location
              </p>
              <button
                type="button"
                class="inline-flex w-full  gap-x-1.5 rounded-md bg-light_blue_grey px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-navy_blue_home hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Kaduna, Nigeria
                <svg
                  class="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Filter Keys */}
          <div class="mx-auto w-3/4 text-lg font-medium mt-4 text-start text-navy_blue_home">
            <div class="mx-auto max-w-md">
              <h3 className="">Experience Levels</h3>
              <ul class="">
                <li class="flex w-50 items-center gap-2.5 px-3 py-2">
                  <input
                    type="checkbox"
                    id="checkbox4"
                    class="peer relative left-0 h-5 w-5 shrink-0 appearance-none rounded-sm border outline-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-solid-green hover:ring hover:ring-gray-300"
                  />
                  <label
                    for="checkbox4"
                    class="inline-block w-full cursor-pointer font-medium text-gray-600"
                  >
                    {" "}
                    Expert{" "}
                  </label>
                </li>
                <li class="flex w-50 items-center gap-2.5 px-3 py-2">
                  <input
                    type="checkbox"
                    id="checkbox4"
                    class="peer relative left-0 h-5 w-5 shrink-0 appearance-none rounded-sm border outline-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-solid-green hover:ring hover:ring-gray-300"
                  />
                  <label
                    for="checkbox4"
                    class="inline-block w-full cursor-pointer font-medium text-gray-600"
                  >
                    {" "}
                    Intermediate{" "}
                  </label>
                </li>
                <li class="flex w-50 items-center gap-2.5 px-3 py-2">
                  <input
                    type="checkbox"
                    id="checkbox4"
                    class="peer relative left-0 h-5 w-5 shrink-0 appearance-none rounded-sm border outline-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-solid-green hover:ring hover:ring-gray-300"
                  />
                  <label
                    for="checkbox4"
                    class="inline-block w-full cursor-pointer font-medium text-gray-600"
                  >
                    {" "}
                    Junior Engineer{" "}
                  </label>
                </li>
              </ul>
            </div>
          </div>
          {/* Car Brand Filter */}
          <div className="pt-2">
            <div className="mx-auto w-3/4 text-lg font-medium mt-4 text-start">
              <h3 className="text-navy_blue_home">Car Brand</h3>
            </div>
            <div class="w-5/6 mx-auto text-lg font-medium mt-4">
              <input
                type="search"
                class="rounded-lg md:text-center text-sm w-1/2 md:w-1/5 h-8 bg-blue_grey absolute"
                id="exampleSearch2"
                placeholder="What's your Car Brand?"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7 mr-12 ml-auto relative"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
          {/* Search Tips */}
          <div className="mx-auto w-3/4 bg-navy_blue_home text-pure-white font-medium text-start my-8">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              <h4>Automobile Maintenance Tips</h4>
            </div>
            <hr />
            <p className="p-6">
              Regularly check tire pressure, change oil, and inspect brakes.
              Address issues promptly for optimal performance and longevity.
              Timely maintenance ensures a smooth and safe drive.
            </p>
          </div>
        </div>
        {/* Search Input Section */}
        <div className="p-1 md:w-2/5 md:p-0">
          <div className="mx-auto w-3/4 text-pure-white text-start my-8 bg-navy_blue_home rounded-lg">
            <div className="p-4">
              <h2 className="font-medium text-lg">
                Is Your Vehicle in Bad Shape?
              </h2>
              <p className="mt-2">
                Navigate our website application, consult automobile experts and
                leverage user reviews to discover reliable automobile solutions
                tailored to your needs and preferences.
              </p>
              <div class="mt-4">
                <input
                  type="search"
                  class="rounded-lg text-center w-11/12 h-8 bg-select_search"
                  id="exampleSearch2"
                  placeholder=""
                />
              </div>
              {/* Find Mechanic Button*/}
              <div className="w-1/2 mt-6 mx-auto">
                <button
                  className="bg-pure-white text-navy_blue_home p-2 h-9 text-base rounded-lg font-semibold"
                  name="search"
                  onClick={handleUserSubmit}
                  method="get"
                  type="submit"
                  value={formData.search}
                >
                  Find Mechanic
                </button>
              </div>
            </div>
          </div>
          {/* Search Results template */}
          <div className="mx-auto w-3/4 mt-6 bg-light_blue_grey rounded-lg">
            {/* Bookmark tag */}
            <div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 pt-2 text-navy_blue_home ml-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </div>
              {/* Mechanic ID */}
              <div className="mt-4 flex-col gap-4">
                <div className="mx-auto flex-col">
                  <div className="flex items-center gap-4 justify-center">
                    <img
                      src={Mechdp}
                      alt="mechanic display"
                      className="w-24 h-24"
                    />
                  </div>
                  <div>
                    <h2 className="text-navy_blue_home font-semibold text-lg text-center">
                      Emmanuel Samuel
                    </h2>
                    <h5 className="text-center text-font-green">
                      $500 - $1500
                    </h5>
                    <h5 className="text-center text-font-green">Expert</h5>
                  </div>

                  {/* Mechanic Automobile Specialty */}
                  <div className="flex gap-2  mx-auto w-2/5">
                    <h4 className="text-font-green">Mercedes</h4>
                    <h4 className="text-active-red">Toyota</h4>
                    <h4 className="text-red">Honda</h4>
                    <h4 className="text-blue_grey">BMW</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Mechanic Description */}
            <div className="">
              <p className="text-navy_blue_home p-6">
                A skilled automobile mechanic adeptly diagnoses and repairs
                vehicles, demonstrating expertise in engine maintenance,
                electrical systems, and overall automotive prowess.
              </p>
            </div>
            <div className="w-1/2 mt-6 mx-auto pb-4">
              <button className="bg-pure-white text-navy_blue_home p-2 h-9 text-base rounded-lg font-semibold">
                Locate Mechanic
              </button>
            </div>
          </div>
        </div>
        {/* Profile Section */}
        <div className="mx-auto w-3/4 mt-6 bg-light_blue_grey rounded-lg py-8 md:w-1/4">
          {/* Profile Picture & Description */}
          <div className="mt-2">
            <div className="w-36 mx-auto flex items-center justify-center">
              <img src={Userdp} alt="profile display" />
            </div>
            {/* User Name & Title */}
            <div className="text-navy_blue_home w-36 mx-auto text-lg">
              <h2 className="text-center">John Qurix</h2>
              <h4 className="text-center">Student</h4>
            </div>
          </div>
          {/* Edit Profile Button */}
          <div className="mt-1 w-36 mx-auto text-center text-lg font-semibold">
            <button className="bg-navy_blue_home px-6 rounded-lg">
              Edit Profile
            </button>
          </div>
          {/* BookMarks */}
          <div className="mt-6 bg-light_blue_grey rounded-lg">
            <div className="text-navy_blue_home mt-2">
              <h2 className="font-bold text-center">Bookmarks</h2>
            </div>
            <div className="">
              <table className="table-auto text-navy_blue_home">
                <tr className="">
                  <th className="p-4">Name</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
                <tr className="hover:bg-hover_blue_grey">
                  <td className="p-4">Emmanuel Samuel</td>
                  <td className="p-4">Active</td>
                  <td className="p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="hover:bg-hover_blue_grey">
                  <td className="p-4">Jamilu Jega</td>
                  <td className="p-4">Inactive</td>
                  <td className="p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      />
                    </svg>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;

import React from "react";
import Amechanic from "../assets/auto-mech_img.png";
import Aworkshop from "../assets/locate-workshop_img.png";
import Amaintenance from "../assets/car-maintenance_img.png";
import "../css/index.css";
import landing from "../assets/landing007.png";

const Home = () => {
  return (
    <div className="">
      {/* Home page Landing section */}
      <div className="">
        <div className="homeland relative">
          <img
            src={landing}
            alt="landing"
            srcset=""
            class="h-50 w-full object-cover"
          />
          <div className="absolute mt-[-90px]  translate-x-36 translate-y-10">
            <button className="bg-navy_blue_home p-2 text-pure-white text-xs rounded-lg">
              Register Now
            </button>
          </div>
        </div>
      </div>
      {/* Home page Services section */}
      <div className="my-10">
        <div className="w-3/4 mx-auto">
          <h3 className="text-center text-2xl font-bold md:text-4xl">
            Our Services
          </h3>
          <p className="text-center text-base max-w-screen-sm md:text-3xl md:max-w-screen-xl">
            Quality auto care: repairs, maintenance, diagnostics, and efficient
            solutions for a smooth, reliable driving experience.
          </p>
        </div>
        <div className="md:flex md:mx-auto md:w-4/6 md:h-3/6 md:gap-6">
          <div className="w-3/4 mx-auto bg-blue mt-8 p-7">
            <div>
              <div className="mx-auto w-2/3 h-2/3">
                <img src={Amechanic} alt="An Automobile Mechanic" />
              </div>
              <h3 className="text-center text-2xl font-bold">
                Automobile Mechanics
              </h3>
              <p className="text-center text-base">
                Skilled and experienced automobile mechanics ensure precision
                and reliability, adeptly diagnosing and fixing issues to keep
                vehicles running smoothly, a testament to their expertise and
                dedication.
              </p>
            </div>
          </div>
          <div className="w-3/4 mx-auto bg-yellow mt-8 p-7">
            <div>
              <div className="mx-auto w-2/3 h-2/3">
                <img src={Amaintenance} alt="An Automobile Maintenance logo" />
              </div>
              <h3 className="text-center text-2xl font-bold">
                Automobile Maintenance
              </h3>
              <p className="text-center text-base">
                Our automobile maintenance guarantees peak performance and
                safety. Skilled technicians, cutting-edge diagnostics, and
                timely service ensure your vehicle runs smoothly, always ready
                for the road.
              </p>
            </div>
          </div>
          <div className="w-3/4 mx-auto bg-active-green mt-8 p-7">
            <div>
              <div className="mx-auto w-2/3 h-2/3">
                <img src={Aworkshop} alt="An Automobile Workshop" />
              </div>
              <h3 className="text-center text-2xl font-bold">
                Track Automobile Workshop
              </h3>
              <p className="text-center text-base">
                Effortlessly locate automobile workshops with our user-friendly
                platform. Track services, reviews, and prices, ensuring a
                seamless experience for all your vehicle maintenance needs.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* Home page Newsletter section */}
      <div className="">
        <div className="bg-navy_blue_home text-white w-10/12 mx-auto">
          <div>
            <h2 className="text-center text-2xl">Newsletter Subscription</h2>
            <p className="text-center">
              Stay in the loop with our exclusive updates! Subscribe now for the
              latest news, offers, and exciting content delivered directly to
              your inbox..
            </p>
            <div className="flex-row">
              <div className="">
                <input
                  type=""
                  className="w-full p-2 rounded-xl md:p-4 md:rounded-3xl"
                  placeholder="Enter Your Email"
                  name="Enter Your Email"
                />
                <div className="text-center mt-4">
                  <button className="bg-red p-2 rounded-xl md:rounded-3xl">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>Checkout</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus amet atque laudantium impedit consequatur doloribus
                animi sunt ex, sit ullam.
              </p>
              <h2>Checkout</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus amet atque laudantium impedit consequatur doloribus
                animi sunt ex, sit ullam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

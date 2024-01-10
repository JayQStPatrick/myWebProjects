import React from "react";
import Amechanic from "../assets/auto-mech_img.png";
import Aworkshop from "../assets/locate-workshop_img.png";
import Amaintenance from "../assets/car-maintenance_img.png";
import Navbar from "../../navbar";
import Footer from "./footer";
import "../css/index.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      {/* Our Story section */}
      <div className="aboutus_homeland p-8">
        <div className="text-pure-white">
          <h3 className="text-center text-xl mt-10 font-bold md:text-5xl md:mt-0">
            Our Story
          </h3>
          <p className="mx-auto text-base max-w-sm md:text-3xl md:max-w-4xl">
            In the digital engine of innovation, the automobile website revved
            to life with a visionary spark. Fueled by a passion for wheels and
            the open road, a team of tech enthusiasts and automotive aficionados
            united. Their drive? To create a virtual haven where gearheads and
            casual drivers alike could navigate the vast terrain of automotive
            wonders. With a roadmap forged in pixels and passion, the founders
            meticulously crafted a platform that not only showcases the
            mechanical marvels on wheels but also ignites a community bound by
            the love for all things automotive.
          </p>
          <div className="text-center mt-2">
            <button className="bg-navy_blue_home p-2 text-pure-white rounded-lg">
              Register Now
            </button>
          </div>
        </div>
      </div>
      {/* Website Statements Section */}
      <div className="bg-navy_blue_home my-40">
        <h3 className="text-center text-white pt-12 text-2xl md:text-5xl">
          ProMech Statements
        </h3>
        <div className="w-3/4 mx-auto p-10 md:flex md:gap-12 md:w-4/5">
          <div className="bg-pure-white p-6 md:w-4/12 md:p-10 rounded-xl">
            <h3 className="text-center text-3xl md:text-5xl text-navy_blue_home">
              Our Aim
            </h3>
            <p className="text-lg mt-4">
              Our automobile website aims to be the digital pit stop for
              enthusiasts, offering a turbocharged experience—informative
              articles, reviews, and a vibrant community, all fueled by a shared
              love for cars.
            </p>
          </div>
          <div className="bg-pure-white mt-6 md:mt-0 p-6 md:w-4/12 md:p-10 rounded-xl">
            <h3 className="text-center text-3xl md:text-5xl text-navy_blue_home">
              Our Mission
            </h3>
            <p className="text-lg mt-4">
              Our mission is to steer enthusiasts into a digital realm of
              automotive fascination. We navigate the road of information,
              reviews, and camaraderie, fueling the passion for everything on
              wheels.
            </p>
          </div>
          <div className="bg-pure-white mt-6 md:mt-0 p-6 md:w-4/12 md:p-10 rounded-xl">
            <h3 className="text-center text-3xl md:text-5xl text-navy_blue_home">
              Our Vision
            </h3>
            <p className="text-lg mt-4">
              Our automobile website envisions a virtual realm where enthusiasts
              converge to explore, celebrate, and share the diverse and
              thrilling world of automobiles, fostering a passionate community
              of road aficionados.
            </p>
          </div>
        </div>
      </div>
      {/* Services section */}
      <div className="my-40">
        <div className="w-3/4 mx-auto ">
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
      <Footer />
    </div>
  );
};

export default AboutUs;

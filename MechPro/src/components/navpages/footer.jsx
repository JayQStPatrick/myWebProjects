import React from "react";
import icon1 from "../assets/fb-icon.png";
import icon2 from "../assets/twitter-icon.png";
import icon3 from "../assets/in-icon.png";
import icon4 from "../assets/youtube-icon.png";
import icon5 from "../assets/instagram-icon.png";

const Footer = () => {
  return (
    <div>
      {/* Footer Content */}
      <div className="bg-black">
        <div className="py-8 text-white w-2/3 mx-auto md:flex md:gap-16 md:w-4/5 ">
          <div className="md:w-3/12">
            <h2 className="text-3xl text-center">Address</h2>
            <div className="mt-4">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsummmmm is that it has a more-or-less
                normal distribution of letters,{" "}
              </p>
            </div>
          </div>
          <div className="md:w-3/12 mt-4">
            <h2 className="text-3xl text-center">Follow Us</h2>
            <div className="mx-auto w-2/5 mt-4">
              <div className="flex gap-2">
                <img src={icon1} />
                <a>Facebook</a>
              </div>
              <div className="flex gap-2  mt-2">
                <img src={icon2} />
                <a>Twitter</a>
              </div>
              <div className="flex gap-2 mt-2">
                <img src={icon3} />
                <a>Linkedin</a>
              </div>
              <div className="flex gap-2 mt-2">
                <img src={icon4} />
                <a>Youtube</a>
              </div>
              <div className="flex gap-2 mt-2">
                <img src={icon5} />
                <a>Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Content */}
      <div>
        <div>
          <p className="text-center text-xl">2023 All Rights Reserved. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

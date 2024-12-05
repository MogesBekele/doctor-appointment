import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*left section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
          focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.
          </p>
        </div>
        {/*center section */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy Police</li>
          </ul>
        </div>
        {/*right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+251-964671617</li>
            <li>mogesbekele32@gmail.com</li>
          </ul>
        </div>
      </div>

      {/*copyright section */}

      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@moges All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center  gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur, illum? Necessitatibus ullam iste tempora commodi!
            Corrupti tenetur soluta itaque, unde hic veniam blanditiis officia
            voluptatum sed, placeat incidunt quis qui?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            iste veritatis ad non deserunt, sequi dolore quibusdam
            necessitatibus repellendus esse accusamus reiciendis a sed
            consequatur labore? Aliquid sed quod adipisci? elit. Consequuntur,
            illum? Necessitatibus ullam iste tempora commodi! Corrupti tenetur
            soluta itaque, unde hic veniam blanditiis officia voluptatum sed,
            placeat incidunt
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            recusandae quisquam harum laudantium totam possimus fugiat, facilis
            dolore quod labore inventore voluptates eum minima repellendus.
            Nihil magnam harum eum ab!
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US </span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, reiciendis!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, laborum.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure qui exercitationem sint?</p>
        </div>
      </div>
    </div>
  );
};

export default About;

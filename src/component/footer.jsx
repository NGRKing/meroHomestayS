import React from "react";

const FooterComponent = () => {
  return (
    <div className="bg-[rgba(27,63,49)] w-full">
      <div className=" m-auto w-[75%] text-white py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10 item-center">
          <div className="md:max-w-[300px]">
            <h1 className="font-bold text-2xl">Mero Home Stay</h1>
            <p className="mt-2">
              MeroHomestay provides all the information you need to find the
              perfect homestay for your next trip. You can search for homestays
              by location, amenities, and price, and read reviews from previous
              guests to help you make your decision.
            </p>{" "}
          </div>
          <div className="center">
            <ul>
              <li className="font-semibold">QUICK LINK</li>
              <li className="mt-2">Home</li>
              <li className="mt-2">Homestay</li>
              <li className="mt-2">Location</li>
              <li className="mt-2">Privacy Policy</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li className="font-semibold">CONTACT</li>
              <li className="mt-2">Parshyang-05, Pokhara</li>
              <li className="mt-2">hello@ClinchTech.net</li>
              <li className="mt-2">9802834141</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-200" />
      <div className=" m-auto w-[75%] text-white px-4 py-3 text-center">
        <div>Copyright © 2022. All right Reserved by ClinchTech</div>
      </div>
    </div>
  );
};

export default FooterComponent;

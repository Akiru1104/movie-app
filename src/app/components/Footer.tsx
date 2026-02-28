import React from "react";
import { TbMovie } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";

export const Footer = () => {
  return (
    <div
      className="bg-[#4338CA] dark:bg-gray-900 flex flex-col md:flex-row text-white py-10 gap-8 md:gap-24 justify-between px-6 md:px-10"
    >
      <div className=" flex flex-col gap-3">
        <div className="flex align-center gap-2 italic font-bold items-center">
          <TbMovie className=" h-5 w-5" />
          Movie Z
        </div>
        <div>© 2026 Movie Z. All Rights Reserved.</div>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-24">
        <div className="flex flex-col gap-4">
          <div className="pb-0.5">Contact Information</div>
          <div className="flex gap-5 items-center">
            <div className="flex gap-4 items-center">
              <CiMail className="h-4 w-4" />
            </div>

            <div className="flex flex-col">
              <div>Email:</div>
              <div>support@movieZ.com</div>
            </div>
          </div>
          <div className=" flex gap-5 items-center">
            <PiPhoneThin className="h-4 w-4" />

            <div className="flex flex-col">
              <div>Phone:</div>
              <div>+976 (11) 123-4567</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>Follow us </div>
          <div className=" flex gap-3">
            <div>Facebook</div>
            <div>Instagram</div>
            <div>Twitter</div>
            <div>Youtube</div>
          </div>
        </div>
      </div>
    </div>
  );
};

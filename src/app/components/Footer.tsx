import React from "react";
import { TbMovie } from "react-icons/tb";

export const Footer = () => {
  return (
    <div
      className="bg-[#4338CA] flex text-white h-[280] pt-[40] pb-[40
    ] gap-12"
    >
      <div className="">
        <img src="Logo.png" alt="" />
        <div className="flex align-center">
          <TbMovie />
          Movie Z
        </div>
        <div>© 2024 Movie Z. All Rights Reserved.</div>
      </div>
      <div className="flex">
        <div>Contact Information</div>
        <div>
          <img src="mail.png" alt="" />
          <div>
            <div>Email:</div>
            <div>support@movieZ.com</div>
          </div>
        </div>
        <div className="">
          <img src="phone.png" alt="" />
          <div>
            <div>Phone:</div>
            <div>+976 (11) 123-4567</div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div>Follow us </div>
        <div className=" flex">
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Twitter</div>
          <div>Youtube</div>
        </div>
      </div>
    </div>
  );
};

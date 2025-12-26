import React from "react";

export const Footer = () => {
  return (
    <div
      className="bg-[#4338CA] flex text-white h-[280] pt-[40] pb-[40
    ] gap-12"
    >
      <div>
        <img src="Logo.png" alt="" />
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
        <div>
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

import React from 'react';
import { TfiLocationPin } from 'react-icons/tfi';
import { BsCart2 } from 'react-icons/bs';
import { IoLogInOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className="h-[5rem] bg-gray-100 flex justify-between shadow-lg items-center md:px-20 lg:justify-center lg:gap-[60rem]">
      <div className="flex gap-2 items-center ">
        <TfiLocationPin size={60} color="red" className="flex items-center" />
        <h1>listeo</h1>
      </div>

      <div className="flex gap-10 ">
        <BsCart2
          size={55}
          color="red"
          className="rounded-full bg-red-600/25 py-4 px-4 text-white"
        />
        <div className="flex items-center">
          <IoLogInOutline size={30} />
          sign in
        </div>
      </div>
    </div>
  );
};

export default Navbar;

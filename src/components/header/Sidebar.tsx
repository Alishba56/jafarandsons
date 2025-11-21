"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Links from "./Links";
import { RxCross2 } from "react-icons/rx";

const variants = {
  open: {
    left: 0,
    transition:{
        duration: 0.5
    }
  },
  closed: {
    left: -300,
    transition: {
      duration: 0.3,
      delay: 0.4
    },
  },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [attr, setAttr] = useState<string>("hidden");
  const openMenu = () => {
    setAttr(isOpen ? "hidden" : "block");
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed sm:hidden z-30">
      <IoMenu
        onClick={openMenu}
        className="bg-white h-10 w-10 p-1 fixed z-20 left-7 top-8 cursor-pointer rounded-full text-3xl"
      />
      <RxCross2
        onClick={openMenu}
        className={`${attr} bg-white h-10 w-10 p-1  fixed z-20 left-7 top-8 cursor-pointer bg-white rounded-full text-3xl`}
      />
      <motion.div
        variants={variants}
        className={`fixed left-[-300px] w-[300px] shad top-0 h-[100%] z-10 bg-white`}
        animate={isOpen ? "open" : "closed"}
      >
        <Links/>
      </motion.div>
    </div>
  );
};

export default Sidebar;

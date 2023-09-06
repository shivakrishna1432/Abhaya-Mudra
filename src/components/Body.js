import React from "react";
import { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Sidebar from "./Sidebar";
import "../index.css";

const Body = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="box-contain">
      <Sidebar show={isOpen} />
      <div className="img-container w-full">
        {!isOpen ? (
          <div className="icons icons-left">
            <AiOutlineDoubleLeft
              className="side-bar sidebar-left"
              onClick={() => handleOpen()}
              size={20}
            />
          </div>
        ) : (
          <div className="icons icons-right">
            <AiOutlineDoubleRight
              className="side-bar sidebar-right text-white"
              onClick={() => handleOpen()}
              size={20}
            />
          </div>
        )}

        <img
          src="https://i.imgur.com/CZT1d6u.png"
          alt="Abhaya-mudra"
          className="image"
        />
      </div>
    </div>
  );
};

export default Body;

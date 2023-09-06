import React, { useState } from "react";
import "../index.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import {
  AiOutlineLike,
  AiOutlineShareAlt,
  AiOutlineEye,
  AiOutlineLine,
} from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
const Sidebar = ({ show }) => {
  const [showDescription, setShowDescription] = useState(false);
  const description = `Maitreya, the future Budha to be, resides in the Tushita heaven as a
  bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the
  eighth Buddha, a successor of the seven historical Buddhas
  (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Budha will
  be born in ketumati, in present-day Varanasi, Uttar Pradesh. As a
  bodhisattva, Maitreya wears a heavily adorned with earrings, wristlets,
  necklaces, and an amulet.The`;
  return (
    <div
      className={
        show ? "sidebar-main-container active" : "sidebar-main-container"
      }
    >
      {/* <div className="sidebar-main-container"> */}
      <div className="sidebar-container">
        <div className="text-container">
          <div className="back-btn">
            <MdOutlineKeyboardArrowLeft
              size={35}
              className="text-red-300 bg-gray-200 rounded-full my-6"
            />
          </div>
          <div className="scroll-line">
            <AiOutlineLine size={30} />
          </div>
          <h1 className="head">
            MAITREYA BUDDHA IN GESTURE OF FEARLESS (ABHAYA MUDRA)
          </h1>
          <div className="icons-container">
            <div className="icon-container">
              <AiOutlineLike
                className="bg-gray-200 rounded-full p-3"
                size={40}
              />
              <p className="text-center text-xs">0</p>
            </div>
            <div className="icon-container">
              <AiOutlineShareAlt
                className="bg-gray-200 rounded-full p-3"
                size={40}
              />
              <p className="text-center text-xs">120</p>
            </div>
            <div className="icon-container">
              <AiOutlineEye
                className="bg-gray-200 rounded-full p-3"
                size={40}
              />
              <p className="text-center text-xs">27</p>
            </div>
          </div>
          <div className="description-container">
            <div className="details">
              <p>Dynasty: Ahichchhatra</p>
              <p>Period: 200 CE</p>
              <p>Material: Sandstone</p>
              <p>Location: National Museum</p>
            </div>
            <p className="description-text">Description :</p>
            <p className="desc text-gray-400  ">
              {showDescription ? description : description.slice(0, 200)}
            </p>
            <div
              className="flex items-center mt-[0.5vw] text-red-800 cursor-pointer"
              onClick={() => setShowDescription((bool) => !bool)}
            >
              <BsArrowRight />
              {showDescription ? (
                <p className="button-text ml-1">Read Less</p>
              ) : (
                <p className="button-text ml-1">Read More</p>
              )}
            </div>
          </div>
          <div className="flex btn-container">
            <button
              className="text-white bg-orange-800 font-bold rounded-lg mr-2 add-btn"
              type="button"
            >
              ADD TO COLLECTIONS
            </button>
            <button
              className="text-orange-800 bg-white border border-orange-800 px-2 font-bold py-2 rounded-lg add-btn"
              type="button"
            >
              SOUVENIR
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;

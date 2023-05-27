import React, { useEffect } from "react";
import { Link,NavLink } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart} from "react-icons/fi";

import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3
     hover:bg-light-gray"
    >
      <span
        className="absolute inline-flex rounded-full
       h-2 w-2 right-2 top-2"
        style={{ background: dotColor }}
      />
        {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu,
    isClicked, setIsClicked,handleClick,
    screenSize, setScreenSize,currentColor } = useStateContext();

    const handleCloseSideBar=()=>{
      if(screenSize&&screenSize<=900){
        setActiveMenu(false);
      }
    }
    

useEffect(() => {
  const handleResize=()=>setScreenSize(window.innerWidth);
  window.addEventListener('resize',handleResize)
  handleResize();

  return ()=> window.removeEventListener
  ('resize',handleResize);

}, [])

useEffect(() => {
if(screenSize<=900){
  setActiveMenu(false);
}else{setActiveMenu(true)}

}, [screenSize])



  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <div className="flex">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />

      <Link to="/" onClick={handleCloseSideBar} 
    className="items-center gap-3 ml-3 flex text-xl
    font-extrabold tracking-tight dark:text-white
     text-slate-900">
     <span>Shoppy</span>
   
    </Link>

      </div>
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />   
         <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />  
          <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line  />}
        />
        <TooltipComponent content="Profile" 
        position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1
          hover:bg-light-gray rounded-lg"
          onClick={()=>handleClick('userProfile')}>
            <img src={avatar} className="rounded-full w-8 h-8 "/>
          <p>
            <span className="text-gray-400 text-14">
              Hola,
            </span>{" "}
            <span className="text-gray-400 font-bold ml-1 
            text-14">
              Michel
            </span>
            </p>
            <MdKeyboardArrowDown 
            className="text-gray-400 text-14"/>
          </div>
        </TooltipComponent>

        {isClicked.cart&&<Cart/>}
        {isClicked.chat&&<Chat/>}
        {isClicked.notification&&<Notification/>}
        {isClicked.userProfile&&<UserProfile/>}

      </div>
    </div>
  );
};

export default Navbar;

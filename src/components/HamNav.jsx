import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const HamNav = () => {
    const {setlandscapeFlotingNav,landscapeFlotingNav} = useContext(MyContext)
  return (
    <label>
      <div
       style={{
        left: !landscapeFlotingNav ? "81%" : "94%", // Dynamic positioning via inline styles
        transition: "left 0.4s ease-in-out", // Smooth transition when toggling position
      }}
      className={` glassmorphism rounded h-9 scale-150 w-9  cursor-pointer flex flex-col items-center justify-center absolute z-50 top-5 `}>
        <input className="hidden peer" type="checkbox" checked={!landscapeFlotingNav} onChange={()=>setlandscapeFlotingNav(pv=>!pv)}/>
        <div className={`w-[50%] h-[2px] bg-lime-600 rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]`} />
        <div className={`w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden`} />
        <div className={`w-[50%] h-[2px] bg-orange-600 rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]`} />
      </div>
    </label>
  );
};

export default HamNav;

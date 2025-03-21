import {motion} from "framer-motion";
import React, {  useEffect, useState } from "react";
import { bottombar, middlebar, movefromleft, movefromright, movefromtop, topbar } from "../animation";

const Navbar = () => {
  const Navitems = ["HOME", "ABOUT", "WORK", "CONTACT"];
  const [active, setActive] = useState("HOME");
  const [mobnav,setmobnav]=useState(false)
  const handleMob=()=>{
    setmobnav(!mobnav)
  }
  const handlesection=(id)=>{
  const section=document.getElementById(id)
  if(section){
    const navheight=55.2;
    const position=section.offsetTop-navheight
    window.scrollTo({top:position,behavior:"smooth"})
  }
  }
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 150) {
          setActive(section.id);
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <nav className="bg-black w-full px-4 py-2 z-10 flex justify-between items-center top-0 sticky shadow-lg shadow-blue-950">
      <motion.div variants={movefromleft(1)} initial='initial' whileInView='after'>
        <p className="text-white font-tektur text-[20px]">Sneha Mp</p>
      </motion.div>
      <motion.div variants={movefromtop(0.5,-10)} initial='initial' whileInView='after' className="flex  items-center justify-center px-1.5 py-[6px] rounded-full border-2 border-white hidden tablet:block">
        <ul className="flex gap-3 text-white font-kanit items-center">
          {Navitems.map((item) => (
            <motion.li
              key={item}
              onClick={() => {setActive(item);handlesection(item)}}
              className={`cursor-pointer rounded-full transition-all ${
                active === item ? "bg-white text-black px-2": ""
              }`}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div variants={movefromtop} initial='initial' whileInView='after' className="border-[2px] tablet:hidden border-white w-[40px] h-[35px] rounded-md text-white flex flex-col gap-1 items-center justify-center" onClick={handleMob}>
          <motion.p animate={topbar(mobnav)} className="w-5 h-[0.6px] bg-white"></motion.p>
          <motion.p animate={middlebar(mobnav)} className="w-5 h-[0.6px] bg-white"></motion.p>
          <motion.p animate={bottombar(mobnav)} className="w-5 h-[0.6px] bg-white"></motion.p>
      </motion.div>
      {mobnav?<>
      <div  className="absolute right-4 rounded-md top-13 border-[2px] border-white bg-black w-[120px] h-[130px] p-2">
        <ul className="flex flex-col items-center justify-center gap-1.5 text-white">
          {Navitems.map(item=>(
          <li key={item} className={`px-5 rounded-md ${active === item ? 'bg-white text-black':""}`} onClick={()=>{setActive(item);handlesection(item)}}>{item}</li>
        ))}
        </ul>
      </div>
      </>:""}
    </nav>
  );
};

export default Navbar;

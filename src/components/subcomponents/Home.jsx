import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faFaceAngry, faFaceSmile, faMusic } from "@fortawesome/free-solid-svg-icons";
import { beat, bounce, movefrombottom, movefromleft, movefromright, movefromtop } from "../../animation";
import bg from '../../assets/bg.png'
const Home = () => {
  const [play,setplay]=useState(false)
  const handleMusic=()=>{
  const bgmusic=document.getElementById('bg-music')
  bgmusic.volume=0.6
  if(play){
    bgmusic.pause()
  }
  else{
  bgmusic.play()
  }
  }

  return (
    <div className="flex flex-col tablet:flex-row">
      <div className="lg:w-[50%] w-full  lg:p-30 flex p-4 flex-col text-white">
        <motion.p variants={movefromleft(1)} initial='initial' whileInView='after' className="text-white text-center font-tektur text-[28px]">
          Hi there! I'm
          <span className="pl-1 bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent font-bold">
            Sneha MP
          </span>
        </motion.p>
        <motion.p variants={movefromleft(1.2)} initial='initial' whileInView='after' className="text-white text-center font-tektur text-[22px]">
          A passionate
          <span className="px-1 bg-gradient-to-r from-red-600 to-violet-800 bg-clip-text text-transparent font-bold">
            BIM Modeler
          </span>
          dedicated to precision and innovation.
        </motion.p>
        <motion.p variants={movefromleft(1.5)} initial='initial' whileInView='after' class="text-white text-center font-tektur text-[18px] max-w-2xl mx-auto mt-2">
          Welcome to my portfolio! Explore my work, skills, and expertise in
          Building Information Modeling.
        </motion.p>
        <motion.p variants={movefromleft(1.7)} initial='initial' whileInView='after' className="text-center pt-3 font-tektur">You can find me on</motion.p>
        <motion.div variants={movefrombottom(0.8)} initial='initial' whileInView='after' className="mx-auto flex flex-col gap-6 text-center">
          <a href="https://www.linkedin.com/in/Snehamp2002" target="/">
            <FontAwesomeIcon
              icon={faLinkedin}
              bounce
              className="pt-7 text-[40px]"
            />
          </a>
          <motion.button
            animate={beat}
            className="font-serif bg-blue-500 py-2 px-6 rounded-full cursor-pointer"
            onClick={() => {
              const section = document.getElementById("CONTACT");
              if (section) {
                const navHeight = 55.2; 
                const position = section.offsetTop - navHeight;
                window.scrollTo({ top: position, behavior: "smooth" });
              }
            }}
          >
            HIRE ME
          </motion.button>
        </motion.div>
      </div>
 
      <motion.div variants={movefromtop(1,-200)} viewport={{once:true}} initial='initial' whileInView='after' className="lg:w-[50%]  w-full flex justify-center flex-col items-center lg:px-20">
        <motion.div variants={movefromright(2)} initial='initial' viewport={{once:true}} whileInView='after' className="w-full  flex justify-center tablet:justify-end tablet:pr-6 pb-20">
          <div className="flex items-center justify-center gap-2  p-1.5 cursor-pointer rounded-full bg-gradient-to-r from-gray-500 via-violet-600 to-red-500" onClick={()=>{{handleMusic();setplay(!play)}}}>
            <FontAwesomeIcon icon={faMusic} className="text-white" beatFade/>
            <p className="text-white text-[12px]">Hey! Want some background music?</p>
            <FontAwesomeIcon icon={faFaceSmile} bounce className="text-white"/>
            <audio id="bg-music" src='https://res.cloudinary.com/dy7z1t4xi/video/upload/v1742501595/lnhroysqeg53jv3cvh1u.mp3'></audio>
          </div>
        </motion.div>
        <motion.img animate={bounce} src={bg} alt="image" className="mobile:w-[300px] w-auto tablet:w-[350px]"/>
      </motion.div>
    </div>
  );
};

export default Home;

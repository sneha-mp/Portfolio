import React from 'react';
import { motion } from 'framer-motion';
import autocad from '../../assets/autocad-removebg-preview.png'
import revit from '../../assets/revit-removebg-preview.png'
import enscape from '../../assets/enscape-removebg-preview.png'
import recap from '../../assets/recap-removebg-preview.png'
import navis from '../../assets/Navisworks-removebg-preview.png'
import bim from '../../assets/bim_360-removebg-preview.png'
import { beat, movefromleft, movefromright } from '../../animation';
const About = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-2 lg:pt-[60px] px-2'>
        <div className='flex flex-col lg:flex-row  gap-3'>
      <motion.div variants={movefromleft(1)} initial='initial' viewport={{once:true}} whileInView='after' className='lg:max-w-[300px] w-full bg-gradient-to-b from-blue-500 to-black border-2 rounded-xl lg:min-h-[335px] h-auto border border-white p-2'>
        <p className='text-white text-center font-monoton'>WHO <span className='px-2'>I</span>AM</p>
        <p className='text-white font-bree text-justify p-5'> I am a Civil Engineer specializing in Building Information Modeling ( BIM ).  
          With a strong foundation in construction and design, I focus on delivering precise and efficient project solutions.  
          My passion for innovation and attention to detail drive me to contribute effectively to the AEC industry.</p>
      </motion.div>
      <div>
      <motion.div variants={movefromright(1)} viewport={{once:true}} initial='initial' whileInView='after' className='lg:max-w-[300px] w-full bg-gradient-to-b from-blue-500 to-black border-2 rounded-xl lg:min-h-[335px] h-auto border border-white p-2'>
        <p className='text-white text-center font-monoton'>MY<span className='px-2'>SKILLS</span></p>
        <p className='text-white font-bree text-justify p-5'> Here are the tools and technologies I specialize in for efficient BIM modeling and project execution.</p>
        <div className='flex items-center justify-center flex-wrap gap-1'>
          <div className='flex items-center justify-center pr-2 border-2 max-w-[120px] border-white rounded-md'>
            <img src={autocad} alt="autocad" className='w-[40px] h-[40px]'/>
            <p className='text-white font-bree'>AutoCAD</p>
          </div>
          <div className='flex items-center justify-center pr-2 border-2 max-w-[120px] border-white rounded-md'>
            <img src={revit} alt="autocad" className='w-[40px] h-[40px]'/>
            <p className='text-white font-bree'>Revit</p>
          </div>
          <div className='flex items-center justify-center p-1 border-2 max-w-[120px] border-white rounded-md'>
            <img src={enscape} alt="autocad" className='w-[40px] h-[40px]'/>
            <p className='text-white font-bree'>Enscape</p>
          </div>
          <div className='flex items-center justify-center p-1 border-2 max-w-[130px]  border-white rounded-md'>
            <img src={recap} alt="autocad" className='w-[40px] h-[40px]'/>
            <p className='text-white font-bree'>Recap Pro</p>
          </div>
          <div className='flex items-center justify-center p-1 border-2 max-w-[130px]  border-white rounded-md'>
            <img src={navis} alt="autocad" className='w-[40px] h-[40px]'/>
            <p className='text-white font-bree'>Navisworks</p>
          </div>
          <div className='flex items-center justify-center p-1 border-2 max-w-[130px]  border-white rounded-md'>
            <img src={bim} alt="autocad" className='w-[40px] h-[40px]'/>
            <p className='text-white font-bree'>Bim 360</p>
          </div>
        </div>
      </motion.div>
      </div>
      <motion.div variants={movefromright(1.5)} initial='initial' viewport={{once:true}} whileInView='after'  className='lg:max-w-[300px] flex flex-col w-full bg-gradient-to-b from-blue-500 to-black border-2 rounded-xl lg:min-h-[335px] h-auto border border-white p-2'>
        <p className='text-white text-center font-monoton'>DOWNLOAD <span className='px-2'>RESUME</span></p>
        <div className='flex flex-col items-center justify-center lg:pt-20'>
        <p className='text-white font-bree text-justify p-5'>Want to know more about me ?</p>
        <a href="/Sneha_Resume.pdf"
         download='Sneha_Mp_Resume.pdf'
        >
        <motion.button animate={beat} className='bg-gradient-to-r from-red-600 to-green-400 p-2 rounded-full font-tektur cursor-pointer' >Download Resume</motion.button>
        </a>
        </div>
      </motion.div>
      </div>
      <motion.div variants={movefromleft(1.5)} initial='initial' whileInView='after' viewport={{once:true}} className='max-w-[500px] flex flex-col  w-full bg-gradient-to-b from-blue-500 to-black border-2 rounded-xl  h-auto border border-white mx-2 p-2'>
        <p className='text-white text-center font-monoton'>Education</p>
        <div className='flex flex-col items-center justify-center pl-2 w-fit'>
        <p className='text-white font-bree'>Bachelor of Technology (B.Tech) in Civil Engineering</p>
        <p className='text-white font-bree'>St. Thomas College of Engineering and Technology, Kannur</p>
        <ul className='text-white font-bree list-disc'>
            <li>2020-2024 Batch</li>
            <li>No Backlogs</li>
        </ul>
        </div>
        </motion.div>
    </div>
  );
}
export default About;

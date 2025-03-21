import React from 'react';
import first from '../../assets/first.jpg'
import second from '../../assets/second.jpg'
import third from '../../assets/third.jpg'
import {motion} from 'framer-motion'
import { beat, movefromleft, movefromright, viewfromback } from '../../animation';

const Work = () => {
  return (
    <div className='w-full flex justify-center  gap-5 flex-wrap p-2'>
     <motion.div variants={viewfromback(0.5)} initial='initial' viewport={{once:true}} whileInView='after' className='max-w-[400px] w-full min-h-[400px] h-auto border border-2 border-white rounded-xl'>
        <p className='text-white text-center pt-1 px-1 font-monoton'>Residential<span className='px-2'> House</span>(AutoCAD)</p>
        <div className='w-full flex items-center justify-center p-2 '>
            <img src={first} className='h-[240px] w-full' alt="first project" />
        </div>
        <div>
            <p className='text-white px-4 font-bree text-justify'>
            Designed a duplex house with detailed AutoCAD drawings, including floor plans, elevations, area plans, and sections. The ground floor optimizes space, while the first floor balances privacy and openness. The project highlights my architectural design and technical drafting skills.
            </p>
        </div>
            <a href="/Residential_Home.pdf" target='_'>
        <motion.button animate={beat} className=' text-white mx-4 cursor-pointer my-2 font-tektur bg-gradient-to-r from-green-400 via-red-600 to-violet-700 px-4 py-2 rounded-full'>
            Download pdf
        </motion.button>
            </a>
     </motion.div>
     <motion.div variants={viewfromback(0.7)} initial='initial' viewport={{once:true}} whileInView='after' className='max-w-[400px] min-h-[400px] rounded-xl w-full border border-2 border-white'>
     <p className='text-white text-center pt-1 px-1 font-monoton'>Cafe <span className='px-1'>(AutoCAD)</span></p>
        <div className='w-full flex items-center justify-center p-2 '>
            <img src={second} className='h-[240px] w-full' alt="first project" />
        </div>
        <div>
            <p className='text-white px-4 font-bree text-justify'>
            Designed a café with ground and mezzanine floor plans in AutoCAD, optimizing space, circulation, and ambiance. The layout ensures efficiency, accessibility, and a dynamic dining experience, showcasing my commercial design and drafting skills.
            </p>
        </div>
            <a href="/Cafe_plan.pdf" target='_'>
        <motion.button animate={beat} className=' text-white mx-4 cursor-pointer my-2 font-tektur bg-gradient-to-r from-green-400 via-red-600 to-violet-700 px-4 py-2 rounded-full'>
            Download pdf
        </motion.button>
            </a>

</motion.div>


<motion.div variants={viewfromback(0.9)} initial='initial' viewport={{once:true}} whileInView='after' className='max-w-[400px] min-h-[400px] rounded-xl w-full border border-2 border-white'>
     <p className='text-white text-center pt-1 px-1 font-monoton'>Family<span className='px-1'>creation</span>(Revit)</p>
        <div className='w-full flex items-center justify-center p-2 '>
            <img src={third} className='h-[240px] w-full' alt="first project" />
        </div>
        <div>
            <p className='text-white px-4 font-bree text-justify'>
            Developed custom Revit families for doors, windows, and beds, featuring detailed 3D models and precise elevation views. Designed for seamless integration into architectural projects, these families enhance visualization, accuracy, and documentation efficiency.
                
             </p>
        </div>
            <a href="/family_creation.pdf" target='_'>
        <motion.button animate={beat} className=' text-white mx-4 cursor-pointer my-2 font-tektur bg-gradient-to-r from-green-400 via-red-600 to-violet-700 px-4 py-2 rounded-full'>
            Download pdf
        </motion.button>
            </a>

</motion.div>



<motion.div variants={viewfromback(0.5)} initial='initial' whileInView='after' viewport={{once:true}} className='max-w-[400px] min-h-[400px] rounded-xl w-full border border-2 border-white'>
     <p className='text-white text-center pt-1 px-1 font-monoton'>Single-story <span className='px-1'>residential</span>house <span> <br /> (Revit <span className='px-1'>&</span> Enscape)</span></p>
        <div className='w-full flex items-center justify-center p-2'>
            <div className='bg-white p-1 rounded-md'>
            <video src="https://res.cloudinary.com/dy7z1t4xi/video/upload/v1742494574/qrlls9mslsc6qwfmvrlz.mp4" autoPlay loop controls muted>
            </video>
            </div>
        </div>
        <div>
            <p className='text-white px-4 font-bree text-justify'>
            Developed a comprehensive architectural package for a single-story house in Revit, including detailed plans, sections, elevations, a 3D model, and a rendered video. This project highlights my technical expertise and proficiency in design visualization.
           </p>
        </div>
        <a href="/CURTAIN_WALL.pdf" target='_'>
        <motion.button animate={beat} className=' text-white mx-4 cursor-pointer my-2 font-tektur bg-gradient-to-r from-green-400 via-red-600 to-violet-700 px-4 py-2 rounded-full'>
            Download pdf
        </motion.button>
            </a>
            <a href="/3d_images.pdf" target='_'>
        <motion.button animate={beat} className=' text-white mx-4 cursor-pointer my-2 font-tektur bg-gradient-to-r from-green-400 via-red-600 to-violet-700 px-4 py-2 rounded-full'>
            Download images
        </motion.button>
            </a>
</motion.div>

<motion.div variants={viewfromback(0.7)} initial='initial' whileInView='after' viewport={{once:true}} className='max-w-[400px] min-h-[400px] rounded-xl w-full border border-2 border-white'>
     <p className='text-white text-center pt-1 px-1 font-monoton'>Duplex<span className='px-1'>House</span><br /> (Revit <span className='px-1'>&</span> Enscape)</p>
        <div className='w-full flex items-center justify-center p-2'>
            <div className='bg-white p-1 rounded-md'>
            <video src='https://res.cloudinary.com/dy7z1t4xi/video/upload/v1742494572/zc6vvouwryzmj1h48l0w.mp4' autoPlay loop controls muted></video>
            </div>
        </div>
        <div>
            <p className='text-white px-4 font-bree text-justify'>
            Designed a duplex house in Revit with detailed plans, elevations, sections, a color legend, and 3D views. A rendered Enscape video showcases realistic lighting and materials, highlighting my BIM modeling and visualization skills.
             </p>
        </div>
        <a href="/Duplex.pdf" target='_'>
        <motion.button animate={beat} className=' text-white mx-4 cursor-pointer my-2 font-tektur bg-gradient-to-r from-green-400 via-red-600 to-violet-700 px-4 py-2 rounded-full'>
            Download pdf
        </motion.button>
            </a>
            <a href="/3d_duplex.pdf" target='_'>
        <motion.button animate={beat} className=' text-white mx-4 cursor-pointer my-2 font-tektur bg-gradient-to-r from-green-400 via-red-600 to-violet-700 px-4 py-2 rounded-full'>
            Download images
        </motion.button>
            </a>
</motion.div>


<motion.div variants={viewfromback(0.9)} initial='initial' whileInView='after' viewport={{once:true}} className='max-w-[400px] min-h-[400px] rounded-xl w-full border border-2 border-white'>
     <p className='text-white text-center pt-1 px-1 font-monoton'>Duplex<span className='px-1'>House 2</span><br /> (Revit <span className='px-1'>&</span> Enscape)</p>
        <div className='w-full flex items-center justify-center p-2'>
            <div className='bg-white p-1 rounded-md'>
            <video src='https://res.cloudinary.com/dy7z1t4xi/video/upload/v1742541838/rakngunh6qrqqfqucezf.mp4' autoPlay loop controls muted></video>
            </div>
        </div>
        <div>
            <p className='text-white px-4 font-bree text-justify'>
            This duplex house project was designed in Revit with detailed plans, elevations, and sections. Realistic 3D views and an Enscape-rendered walkthrough enhance visualization with immersive lighting and materials.
            </p>
        </div>
        <a href="/Duplex2.pdf" target='_'>
        <motion.button animate={beat} className=' text-white mx-4 cursor-pointer my-2 font-tektur bg-gradient-to-r from-green-400 via-red-600 to-violet-700 px-4 py-2 rounded-full'>
            Download pdf
        </motion.button>
            </a>
            <a href="/3d_duplex2.pdf" target='_'>
        <motion.button animate={beat} className=' text-white mx-4 cursor-pointer my-2 font-tektur bg-gradient-to-r from-green-400 via-red-600 to-violet-700 px-4 py-2 rounded-full'>
            Download images
        </motion.button>
            </a>
</motion.div>


    </div>
  );
}

export default Work;

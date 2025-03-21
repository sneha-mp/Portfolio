import React from 'react';
import Home from './subcomponents/Home';
import About from './subcomponents/About';
import Contact from './subcomponents/Contact';
import Work from './subcomponents/Work';

const Full_body = () => {
  return (
    <section>
      <section id='HOME' className='bg-black lg:min-h-screen h-auto mobile:py-10 tablet:py-20'>
        <Home/>
      </section>
      <section id='ABOUT' className='bg-black lg:min-h-screen h-auto mobile:py-10 py-3'>
        <p className='text-white text-center font-tektur mobile:pb-2 text-[25px]'>ABOUT ME</p>
        <About/>
      </section>
      <section id='WORK' className='bg-black lg:min-h-screen mobile:py-10 h-auto py-3'>
      <p className='text-white text-center font-tektur text-[25px] mobile:pb-2'>MY WORKS</p>
      <Work/>
      </section>
      <section id='CONTACT' className='bg-black mobile:h-screen lg:min-h-screen mobile:py-10 tablet:h-auto py-3'>
      <p className='text-white text-center font-tektur text-[25px]'>CONTACT ME</p>
      <Contact/>
      </section>
    </section>
  );
}

export default Full_body;



export const movefromtop=(delay,initialy)=>({
 initial:{
  y: initialy,
  opacity:0
 },
 after:{
  y:0,
  opacity:1,
  transition:{
    duration:delay,
    ease:'easeIn'
   }
 },
})

export const movefromleft=(delay)=>({
  initial:{
    opacity:0,
    x:-100
  },
  after:{
    opacity:1,
    x:0,
    transition:{
      duration:delay,
      ease:'easeInOut'
    }
  }
})

export const movefromright=(delay)=>({
  initial:{
    opacity:0,
    x:100
  },
  after:{
    opacity:1,
    x:0,
    transition:{
      duration:delay,
      ease:'easeInOut'
    }
  }
})

export const topbar=(isOpen)=>({
  rotate: isOpen ? 45 : 0,
    y: isOpen ? 5 : 0,
    transition: { duration: 0.3 }
})

export const middlebar=(isOpen)=>({
  opacity:isOpen? 0 : 1,
  transition:{duration:0.2}
})

export const bottombar=(isOpen)=>({
  rotate: isOpen ? -45 : 0,
  y: isOpen ? -4 : 0,
  transition: { duration: 0.3 }
})

export const beat={
   scale:[.9,1,.9,1],
   transition:{
    duration:2,
    repeat:Infinity,
    repeatType: "mirror",
    ease:'easeIn'
     }
}

export const bounce = {
  y: [0, -15, 0],
  transition: {
    duration: 2,
    repeat: Infinity, 
    repeatType: "reverse",
    ease: "easeInOut", 
  },
};

export const movefrombottom=(delay)=>({
  initial:{
    opacity:0,
    y:50
  },
  after:{
    opacity:1,
    y:0,
    transition:{
      duration:delay,
      ease:'easeInOut'
    }
  }
})

export const viewfromback=(delay)=>({
  initial:{
    scale:0,
    opacity:0
  },
  after:{
    scale:1,
    opacity:1,
    transition:{
      duration:delay,
      ease:'easeIn'
    }
  }
})
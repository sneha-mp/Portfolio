import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2'

const Contact = () => {
    const[details,setdetails]=useState({
        name:'',
        email:'',
        number:'',
        content:''
    })
    const HandleChange=(e)=>{
        const{name,value}=e.target
        setdetails(prev=>({...prev,[name]:value}))
    }
    const handleSubmit=async(e)=>{
       e.preventDefault();
       const formdata=new FormData()
       formdata.append("access_key","d3ed2909-c23a-406a-a591-c88bca013d0d")
       formdata.append("name",details.name)
       formdata.append("email",details.email)
       formdata.append("Mobile Number",details.number)
       formdata.append("content",details.content)

       const response= await axios.post("https://api.web3forms.com/submit",formdata);
       if(response)
       {
        Swal.fire({
            title: "Good job!",
            text: "Message Sent Successfully!",
            icon: "success"
          });
        setdetails({
            name:'',
            email:'',
            number:'',
            content:''
        })
       }
    }
  return (
    <div className='px-2 w-full flex items-center justify-center pt-10'>
        <div className='max-w-[400px] w-full p-8 bg-gradient-to-br from-gray-600 to-black border-white border rounded-4xl h-auto'>
        <p className="text-center  bg-gradient-to-r from-violet-600 via-blue-500 to-green-400 text-transparent bg-clip-text font-monoton">
  CONNECT <span className="px-2">WITH</span> ME
</p>
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-1 p-2'>
        <input type="text" placeholder='Enter your name' className='text-white border  px-2 py-1 rounded-md max-w-[300px] w-full outline-none font-tektur'required  name='name' value={details.name} onChange={HandleChange}/>
        <input type='email' placeholder='Enter your Email Address' className='text-white border  px-2 py-1 rounded-md max-w-[300px] w-full outline-none font-tektur' name='email' value={details.email} onChange={HandleChange} required/>
        <input type='number' placeholder='Enter your mobile number' className='text-white border  px-2 py-1 rounded-md max-w-[300px] w-full outline-none font-tektur' name='number' value={details.number} onChange={HandleChange} required />
        <textarea placeholder='Enter the content' className='max-w-[300px] w-full border border-white rounded-md min-h-[200px] h-auto outline-none p-2 font-tektur text-white' name='content' value={details.content} onChange={HandleChange}></textarea>
        <button className='text-white font-bree bg-blue-500 px-5 py-2 rounded-full mt-6 cursor-pointer' type='submit'>Send Message</button>
    </form>
        </div>
      
    </div>
  );
}

export default Contact;
 
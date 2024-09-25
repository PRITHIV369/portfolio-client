import React from 'react'
import profilepic from '../assets/img/profilepic.jpg'
const Profile = () => {
  return (
    <>
    <div className='md:w-[100%] md:h-[90vh] bg-slate-950 flex justify-center items-center sm:w- sm:h-full'>
        <div className='md:w-[55%] md:h-[60%] bg-[#f9f9f9] flex md:flex-row flex-col rounded-md sm:w-[90%] sm:h-[80%]'>
                <div className='w-[100%] h-[100%] flex flex-col justify-center px-5 text-justify gap-2'>
                  <span>
            <b className='text-[200%] text-yellow-400 font-sans'>Hello,</b>
            <b className='text-[200%] text-slate-900 font-sans'>I'm Prithivraj,</b>
                  </span>
            <b className='text-[200%] text-purple-600 font-sans'>Full-stack developer</b>
            <b className='text-slate-900'>I'm very creative and innovative full-stack developer. I'm very dedicated and always movtivated. I like to expriment new things.</b>
                </div>    
                <div className='flex justify-center items-center w-full bg-gradient-to-r from-slate-700 to-purple-600 rounded-r-md'>
                  <img src={profilepic} alt='profilepic' className="rounded-full h-40 w-40 shadow-md" />
                </div>
        </div>
    </div>
    </>
  )
}
export default Profile
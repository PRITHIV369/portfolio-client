import { Link } from 'react-router-dom'
import Profile from '../pages/Profile'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import {User2,X} from 'lucide-react'
import React, { useRef, useState } from 'react'
const Navbar = () => {
    const emailref = useRef(null)
    const passwordref = useRef(null)
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(emailref.current.value , passwordref.current.value)
    }
    const[visible,setvisible]=useState(false)
  return (
    <>
    <div className='w-[100%] h-[10vh] bg-gradient-to-r from-slate-900 to-purple-600 text-white flex flex-row items-center justify-between'>
        <div className="text-white font-bold px-3 text-2xl">
            PORTFOLIO 
        </div>
        <ul className='flex flex-row gap-2 justify-center items-center pr-5'>
        <Link to={"/"} element={<Profile/>}>
            <li className='p-3 hover:bg-slate-900 rounded-sm'>Profile</li>
        </Link>
        <Link to={"/projects"} element={<Projects/>}>
            <li className='p-3 hover:bg-slate-900 rounded-sm'>Projects</li>
        </Link>
        <Link to={"/contact"} element={<Contact/>}>
            <li className='p-3 hover:bg-slate-900 rounded-sm'>Contact</li>
        </Link>
        <User2 className='h-8 w-8 text-white rounded-full border-2 border-white hover:bg-white  hover:border-gray-500 hover:text-gray-500' onClick={() => setvisible(true)} />
        </ul>
    </div>
    {
        visible && (
            <>
                <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
                    <div className=" h-[60%] w-[30%] bg-red z-50 flex flex-col  bg-white shadow-lg rounded-md">
                        <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-white bg-gradient-to-r from-slate-900 to-purple-600 text-xl font-bold rounded-md">
                            <div className="w-1/2">
                            <b>LOGIN</b>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                 <b>
                                    <X onClick={() => setvisible(!visible)} />
                                    </b>
                            </div>
                        </div>
                        <div className="w-full h-[85%] flex flex-row justify-center items-center">
                               <form className="h-[90%] w-[80%] flex flex-col justify-center items-center gap-3" onSubmit={handleLogin}>
                                 <input ref={emailref} type="email" placeholder="email" className="p-3 w-full  bg-slate-300 outline-none focus:border-b-2 focus:border-gray-800" />
                                <input ref={passwordref} type="password" placeholder="password" className="p-3 w-full  bg-slate-300 outline-none focus:border-b-2 focus:border-gray-800" />
                                <button type="submit" className="w-full bg-gradient-to-r from-slate-900 to-purple-600 text-slate-200 h-[15%] rounded-md font-bold">SUBMIT</button>
                                <a href='' className=''><small>Forget Password?</small></a>
                            </form> 
                        </div>
                    </div>
                </div>
            </>
        )
    }
</>
  )
}
export default Navbar
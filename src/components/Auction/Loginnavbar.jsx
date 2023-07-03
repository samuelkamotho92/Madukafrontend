import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { MdNotifications, MdSubscriptions } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { Button } from "react-daisyui"; 
import { useSelector,useDispatch } from "react-redux";
import { loggedOut } from "../../redux/apiCall";
const Loginnavbar = () => {
  const [btn, setbtn] = useState();
  const [menu, setmenu] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user?.currentUser?.data.username)
  console.log(user)
  useEffect(() => {
    const getBtn = document.getElementById("hamburger-button");
    const getMenu = document.getElementById("mobile-menu");
    setbtn(getBtn);
    setmenu(getMenu);
  }, []);
  const toggleMenu = () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  };
  return (
    <div className="h-50 shadow-md relative bg-gradient-to-r from-[#ad5389] to-[#3c1053] text-slate-50 fixed ">
      <div className="py-2.5 sm:px-5 sm:py-2 flex justify-between items-center">
        <div className="flex-1 justify-start items-center">
          <h2 className="text-lg ml-2">
            <Link to='/'>Maduka SMEs</Link>
            </h2>
        </div>
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="text-sm cursor-pointer m-2 sm:text-sm ml-2 mr-3">
            <p>
              Welcome Back <span>Samuel Kamotho</span>
            </p>
          </div>
          <div className="text-sm cursor-pointer m-2 sm:text-sm ml-2">
            <Link to="/admin/home">
                <div className="tooltip tooltip-bottom" data-tip='Dashboard'>
                <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      fontSize='2rem'
    >
      <path d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3v10z" />
    </svg>
                </div>
            </Link>
          </div>
          <div className="text-lg cursor-pointer m-2 sm:text-sm ml-2">
            <Link to='/sell'>
       <div className="tooltip tooltip-bottom" data-tip='SELL ONLINE'>
          <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      height="1em"
      width="1em"
      fontSize='2rem'
    >
      <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160v-48zm-48 48H48c-26.5 0-48 21.5-48 48v208c0 53 43 96 96 96h256c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48h-64v-48C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm200-24c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z" />
    </svg>
        </div>
            </Link>

          </div>
        </div>
        {
   !user? (
<div className='hidden md:flex items-center justify-end flex-1'>
<div className='text-md cursor-pointer m-2 sm:text-sm ml-2  hover:bg-teal-400 p-1'>
<Link to='/login'>
Login
</Link>
</div>
<div className='text-md cursor-pointer m-2 sm:text-sm ml-2 hover:bg-teal-400 p-1'>
<Link to='/register'>
Register
</Link>
   </div>
</div>
   ):(
      <div className='hidden md:flex items-center justify-end flex-1'>
<Button onClick={()=>{loggedOut(dispatch)}}>Logout</Button>
      </div>
   )
}
        <button
          id="hamburger-button"
          className="block text-3xl md:hidden cursor-pointer mx-3"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <section
          id="mobile-menu"
          className="absolute top-0 bg-gradient-to-r from-[#ad5389] to-[#3c1053] text-slate-50 w-full text-5xl  flex-col justify-center
  origin-right animate-open-menu hidden
  "
          onClick={toggleMenu}
        >
          <button className="text-8xl self-end px-6">&times;</button>
          <nav className="flex flex-col">
            <div className="text-sm cursor-pointer m-2 sm:text-sm ml-2">
              <p>
                Welcome Back <span>Samuel Kamotho</span>
              </p>
            </div>
            <div className="text-sm cursor-pointer m-2 sm:text-sm ml-2">
              <Link to="/admin/home">Dashbord</Link>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Loginnavbar;

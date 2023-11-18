import { useContext, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.config";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const NavBar = () => {
  const provider = new GoogleAuthProvider();
  const { user, userLogin, userLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const drawerRef = useRef()





  const handleSignOut = () => {
    console.log('Button handle SIgn Out')

    userLogout(auth)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const handleRemoveDrawer = () => {
    // e.preventDefault();
    // console.log('handle remove drawer')
    // setIsVisible(false);

    drawerRef.current.click();
    setTimeout(() => {
    }, 1000);
    console.log(drawerRef.current);
  }

  const navLink = <>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
      }
    >
      Hackthons
    </NavLink>
    <NavLink
      to="/jobsandinternship"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
      }
    >
      Jobs and Internship
    </NavLink>
    <NavLink
      to="/organizers"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
      }
    >
      Organizers
    </NavLink>
  </>

  return (
    <div>

      {/* dark:bg-gray-900 */}
      {/* bg-[#1d232a] */}
      <nav className=" border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HackMania</span>
          </Link>

          {/*//todo: Login Drawer */}
          <div className="flex md:order-2">


            <div className="drawer drawer-end">

              {/*//todo the below portion would be dynamic */}
              {
                user ?
                  <div className="flex items-center">
                    <img className="rounded-full w-10 mr-2" src={user.photoURL} alt="" />
                    <p className="text-white text-md mr-2">{user.displayName}</p>
                    <button onClick={handleSignOut} className="btn py-0 px-2 btn-neutral text-white">Sign Out</button>
                  </div>
                  :
                  <>
                    {/* //todo Login DraWER coDE */}


                    <Link to="/login">
                      {/* Page content here */}
                      <label className="drawer-button btn py-0 px-2 btn-neutral text-white">Login</label>
                    </Link>
                    {/* <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                      
                      <label ref={drawerRef} htmlFor="my-drawer-4" className="drawer-button btn py-0 px-2 btn-neutral text-white">Login</label>
                    </div> */}
                  </>
              }

              {
                // todo Login Drawer Code 
                // <div className="drawer-side">
                //   <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                //   <ul className="menu p-4 w-96 min-h-full bg-base-200 text-base-content">
                //     {/* Sidebar content here */}

                //     <form className="text-center" onSubmit={handleLogin}>
                //       <div className="mt-20">
                //         <label htmlFor="" className="mr-8 text-lg">Email :</label>
                //         <input className=" w-3/4 p-2 rounded-sm" placeholder="Your email" type="text" name="email" />
                //       </div>
                //       <br />
                //       <br />
                //       <div>
                //         <label htmlFor="" className="mr-1 text-lg">Password :</label>
                //         <input className="p-2 w-3/4 rounded-sm" type="password" placeholder="password" name="password" />
                //       </div>
                //       <br />
                //       {/* <br /> */}
                //       <input type="submit" value="Login" className="btn btn-primary" />
                //     </form>

                //     <div className="flex justify-around items-center mb-5">
                //       <p className="text-lg">Don't have an account? Please
                //       </p>

                //       <Link to="/register">
                //         <button onClick={handleRemoveDrawer} className="btn btn-secondary p-2"> Sign Up</button>
                //       </Link>
                //     </div>

                //     <button type="button" onClick={handleLoginWithGoogle} className="w-[88%] mx-auto mb-3 px-10 py-3 rounded-md text-sm text-white font-semibold bg-red-500">SIGN IN WITH GOOGLE</button>
                //   </ul>
                // </div>
              }
            </div>


          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {navLink}
            </ul>
          </div>
        </div>
      </nav>


    </div>
  );
};

export default NavBar;
/**
 *
 * Requirements:
 * =====================
 * 1. Navbar - will have a logo, assignments, login, register link before logged in and will have logo, create assignments, assignments, my assignments, submitted assignments links, log out button with user image(while hover on the user image it will show the user name)
 *
 */

import { Link, useNavigate } from "react-router-dom";
import Logo from "../Components/Logo";
import NavItems from "../Components/NavItems";
import { BsPlusCircleDotted } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import useAuth from "../Hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLogOut = () => {
    logout()
      .then((res) => {
        console.log(res);
        if (res) {
          console.log("Logged out.");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <header className="py-6">
      <div className="container-area">
        <div className="hidden lg:flex justify-between items-center">
          <Logo />
          <nav
            id="main-menu"
            className="flex gap-4 capitalize font-primary font-primary"
          >
            <NavItems />
          </nav>
          <div className="flex gap-8 items-center">
            <Link
              to="/create-assignment"
              className="flex gap-2 items-center capitalize border-b border-gray-500 py-1 text-sm"
            >
              <BsPlusCircleDotted /> <span>Add assignment</span>
            </Link>
            {!user ? (
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
            ) : (
              <div className="group flex gap-3 items-end">
                <img
                  className="w-10 aspect-square object-cover rounded-full border-2 p-[2px]"
                  src={user.photoURL}
                  alt=""
                />
                <div className="">
                  <p className="text-black capitalize text-sm">
                    {user.displayName}
                  </p>
                  <button
                    onClick={handleLogOut}
                    className="py-1 px-4 border text-xs leading-none border-gray-400 group-hover:text-white group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:rounded-md"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* mobile menu */}
        <div className="mobile-menu flex lg:hidden justify-between gap-4 items-center">
          <Logo className="text-3xl" logoClass="w-5" />
          <div className="flex gap-4 items-center">
            <Link className="btn btn-primary px-5 py-1" to="/login">
              Login
            </Link>
            <div>
              <div
                onClick={toggleDrawer}
                className="text-xl border border-black p-[6px] rounded-sm"
              >
                <AiOutlineMenu className="" />
              </div>
              {/* drawer */}
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className="bla bla bla"
              >
                <div className="px-5 py-8 bg-gray-100 min-h-screen flex flex-col gap-8 items-center">
                  {user && (
                    <div className="group flex gap-3 items-end">
                      <img
                        className="w-10 aspect-square object-cover rounded-full border-2 p-[2px]"
                        src={user.photoURL}
                        alt=""
                      />
                      <div className="">
                        <p className="text-black capitalize text-sm">
                          {user.displayName}
                        </p>
                        <button
                          onClick={handleLogOut}
                          className="py-1 px-4 border text-xs leading-none border-gray-400 group-hover:text-white group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:rounded-md"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                  <Link
                    to="/create-assignment"
                    className="flex gap-2 items-center capitalize border-b border-gray-500 py-1 text-sm"
                  >
                    <BsPlusCircleDotted /> <span>Add assignment</span>
                  </Link>
                  <nav
                    id="mobile-menu"
                    className="flex flex-col gap-4 capitalize font-primary items-center"
                  >
                    <NavItems />
                  </nav>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

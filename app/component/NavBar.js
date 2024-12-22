"use client";
import Link from "next/link";
import { useState } from "react";
import LoginBtn from "../LoginBtn";
import LogoutBtn from "../LogoutBtn";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar({ session }) {
  const pathname = usePathname(); // 현재 경로를 가져옵니다.

  const [menuIcon, setIcon] = useState(false);

  const handleSmallerScreensNavigation = () => {
    setIcon(!menuIcon);
  };

  return (
    <header className="bg-slate-400 text-[#CEFF00] w-full ease-in duration-300 top-0 left-0 z-4">
      <nav className="max-w-[1366px] mx-auto h-[40px] flex justify-between items-center p-4">
        <div>
          {session ? (
            <div>
              <span className="text-slate-700">
                {" "}
                🙋 {session.user.name.slice(0, 12)}{" "}
              </span>
              <span className="mx-4">
                <LogoutBtn />{" "}
              </span>
            </div>
          ) : (
            <span className="mx-4">
              <LoginBtn />
            </span>
          )}
        </div>

        <ul className="hidden md:flex uppercase text-sm lg:text-lg">
          <li>
            <Link
              href="/"
              className="text-slate-800 font-semibold hover:underline ml-8"
            >
              {pathname === "/" ? "⭐ Home" : "Home"}
            </Link>
          </li>

          <li>
            <Link
              href="/list"
              className="text-slate-800 font-semibold hover:text-green-400 hover:underline ml-12"
            >
              {pathname === "/list" ? "⭐ Forum" : "Forum"}
            </Link>
          </li>

          <li>
            <Link
              href="/pcd"
              className="text-slate-800 font-semibold hover:text-green-400 hover:underline ml-12"
            >
              {pathname === "/pcd" ? "⭐ PCD" : "PCD"}
            </Link>
          </li>
          <li>
            <Link
              href="/crd"
              className="text-slate-800 font-semibold hover:text-green-400 hover:underline ml-12"
            >
              {pathname === "/crd" ? "⭐ CRD" : "CRD"}
            </Link>
          </li>
          <li>
            <Link
              href="/forming"
              className="text-slate-800 font-semibold hover:text-green-400 hover:underline ml-12"
            >
              {pathname === "/forming" ? "⭐ Tube Forming" : "Tube Forming"}
            </Link>
          </li>
          <li>
            <Link
              href="/spool"
              className="text-slate-800 font-semibold hover:text-green-400 hover:underline ml-12"
            >
              {pathname === "/spool" ? "⭐ Spool" : "Spool"}
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex">
          <div className="flex">
            <Link
              href="/register"
              className="my-2 flex text-lg font-semibold text-slate-800 bg-green-200 hover:font-bold hover:bg-green-400 px-6 py-1 rounded-full"
            >
              SIGN UP
            </Link>
          </div>
        </div>

        <div
          onClick={handleSmallerScreensNavigation}
          className="flex md:hidden"
        >
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-[#CEFF00]" />
          ) : (
            <AiOutlineMenu size={25} className="text-[#CEFF00]" />
          )}
        </div>

        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[40px] right-0 bottom-0 left-0 flex w-full h-screen bg-slate-500 text-slate-100 text-center ease-in duration-300"
              : "md:hidden absolute top-[40px] right-0 bottom-0 left-[-100%] flex w-full h-screen bg-slate-800 text-slate-100 text-center ease-in duration-300 "
          }
        >
          <div className="w-full">
            <ul className="uppercase font-bold text-2xl">
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-white cursor-pointer"
              >
                <Link href="/">home</Link>
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-white cursor-pointer"
              >
                <Link href="/list">forum</Link>
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-white cursor-pointer"
              >
                <Link href="/pcd">pcd</Link>
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-white cursor-pointer"
              >
                <Link href="/crd">crd</Link>
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-white cursor-pointer"
              >
                <Link href="/forming">tube forming</Link>
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className="py-5 hover:text-white cursor-pointer"
              >
                <Link href="/spool">spool</Link>
              </li>
            </ul>

            <div className="flex justify-center items-center mt-16">
              <Link
                href="/register"
                className="my-2 text-lg w-[120px] font-semibold text-slate-800 bg-slate-400 hover:font-bold hover:bg-green-100 px-6 py-1 rounded-full  border-green-400 border-2"
              >
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

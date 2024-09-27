"use client";
import Link from "next/link";
import LoginBtn from "../LoginBtn";
import LogoutBtn from "../LogoutBtn";
import { usePathname } from "next/navigation";

export default function NavBar({ session }) {
  const pathname = usePathname(); // 현재 경로를 가져옵니다.

  return (
    <div className="h-12 flex flex-wrap justify-between bg-slate-600 pl-3 items-center gap-6">
      <div>
        <img className="h-8" src="../logo1.png" alt="logo" />
      </div>

      <div className="inline-block p-3 font-sans text-base ">
        <Link
          href="/"
          className="text-gray-200 font-semibold hover:text-green-400 hover:underline ml-8"
        >
          {pathname === "/" ? "⭐ Home" : "Home"}
        </Link>
        <Link
          href="/list"
          className="text-gray-200 font-semibold hover:text-green-400 hover:underline ml-12"
        >
          {pathname === "/list" ? "⭐ Forum" : "Forum"}
        </Link>
        <Link
          href="/pcd"
          className="text-gray-200 font-semibold hover:text-green-400 hover:underline ml-12"
        >
          {pathname === "/pcd" ? "⭐ PCD" : "PCD"}
        </Link>
        <Link
          href="/crd"
          className="text-gray-200 font-semibold hover:text-green-400 hover:underline ml-12"
        >
          {pathname === "/crd" ? "⭐ CRD" : "CRD"}
        </Link>
        <Link
          href="/forming"
          className="text-gray-200 font-semibold hover:text-green-400 hover:underline ml-12"
        >
          {pathname === "/forming" ? "⭐ Tube Forming" : "Tube Forming"}
        </Link>
        <Link
          href="/spool"
          className="text-gray-200 font-semibold hover:text-green-400 hover:underline ml-12"
        >
          {pathname === "/spool" ? "⭐ Spool" : "Spool"}
        </Link>
      </div>

      <div>
        {session ? (
          <div>
            <span className="text-blue-300"> 🙋 {session.user.name} </span>
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
    </div>
  );
}

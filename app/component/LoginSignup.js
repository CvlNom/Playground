import Link from "next/link";

export default function LoginSignup() {
  return (
    <div className='' style={{minHeight: 'calc(100vh - 112px)'}}>
      <div className="flex flex-col text-slate-500 items-center text-sm text-center mt-[150px]">
        <p> To enter this page, please LOG IN.</p>
        <Link href="/api/auth/signin" className="my-6 text-lg font-semibold text-slate-700 bg-green-200 hover:font-bold hover:bg-green-400 px-10 py-2 rounded-full border-red-500 border-2">
          {" "}
          LOG IN{" "}
        </Link>{" "}
        <br />
        <p> Get a membership, please SIGN UP.</p>
        <Link href="/register" className="my-6 text-lg font-semibold text-slate-700 bg-green-200 hover:font-bold hover:bg-green-400 px-10 py-2 rounded-full border-red-500 border-2">
          {" "}
          SIGN UP
        </Link>
      </div>
    </div>
  );
}

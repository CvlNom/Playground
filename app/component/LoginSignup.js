import Link from "next/link";

export default function LoginSignup() {
  return (
    <div className='loginSignup'>
      <p> To enter this page, please log in.</p>
      <Link href="/api/auth/signin" className='loginBox'> LOG IN </Link> <br />
      <p> Get a membership, please sing up.</p>
      <Link href="/register" className='loginBox'> SIGN UP</Link>
    </div>
  )
}
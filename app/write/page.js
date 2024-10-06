
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import Link from 'next/link';



export default async function Write(req, res) {
	let session = await getServerSession(authOptions)

	if (!session) {
		return (
			<div className='loginSignup'>
				<p> 로그인 후 글을 작성할 수 있습니다.</p>
				<Link href="/api/auth/signin"> 로그인 </Link> <br />
				<p> 회원 등록이 안되어 있나요?</p>
				<Link href="/register"> Sign UP (회원가입) </Link>
			</div>
		)

	} else {
		return (
			<div className='flex flex-grow' style={{minHeight: 'calc(100vh - 112px)'}}>
				<header>
					<title>Post-Writing: wire-lab</title>
					{/* <h2>Posting Agenda</h2> */}
					<link rel="icon" href="/logo.png" />
				</header>

				<main className="flex-grow order-2 bg-slate-200 pl-12 pt-2">
					<div className="p-20">
						<h3 className="text-slate-500 font-bold p-2">Post your Agenda or Opinion</h3>
						<form action="/api/post/new" method="POST">
							{/* action 이 서버에 처리를 요청함, 방법은 Post 와 get */}
							<input name="title" placeholder="Title" required /> <br />
							<textarea name="content" placeholder="Content"  /><br />
							{/* <WriteDate name="writeDate" /> */}
							<button className="bg-green-200 border-red-700 border-4 rounded-lg hover:bg-green-300" type="submit">POST</button>
						</form>
					</div>

				</main>
				<aside className="w-80 min-w-[20rem] order-1 m-0 p-0 bg-slate-100"
				id='asideWrite'></aside>
				
			</div>
		)
	}
}

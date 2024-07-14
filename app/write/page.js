
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
			<div className='pageBody'>
				<header>
					<title>Post your Agenda</title>
					<h2>Posting Agenda</h2>
					<link rel="icon" href="/logo.png" />
				</header>

				<main>
					<div className="p-20">
						<h3>Post your Agenda or Opinion</h3>
						<form action="/api/post/new" method="POST">
							{/* action 이 서버에 처리를 요청함, 방법은 Post 와 get */}
							<input name="title" placeholder="Title" required /> <br />
							<textarea name="content" placeholder="Content"  /><br />
							{/* <WriteDate name="writeDate" /> */}
							<button type="submit">POST</button>
						</form>
					</div>

				</main>
				<aside id='asideWrite'>Side</aside>
				<footer>Footer</footer>
			</div>
		)
	}
}

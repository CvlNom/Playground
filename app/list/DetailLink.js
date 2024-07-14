'use client'
import { useRouter } from "next/navigation"
// 클라이언트 서버에서만 사용 가능 - 페지 이동 방식

export default function DetailLink() {
	let router = useRouter()
	return (
		<button onClick={() => { router.push('/') }}>Button</button>
	)
}

//push대신 back, forward, refresh 사용가능
//prefetch 기능: 페이지를 미리 로드하여 빠르게 로딩 (링크태그에는 자동으로 됨)
//usePathname
//useParams
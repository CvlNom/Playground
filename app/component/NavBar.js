'use client'
import Link from 'next/link';
import LoginBtn from '../LoginBtn';
import LogoutBtn from '../LogoutBtn';
import { usePathname } from 'next/navigation';

export default function NavBar({ session }) {
	const pathname = usePathname(); // 현재 경로를 가져옵니다.

	return (
		<div className='nav_header'>
			<img className='kwakLogo' src='../logo1.png' alt='logo' />

			<nav>
				<div className='nav_link'>
					<Link href='/' className='nav_a'>
						{pathname === '/' ? '⭐ Home' : 'Home'}
					</Link>
					<Link href='/list' className='nav_a'>
						{pathname === '/list' ? '⭐ Forum' : 'Forum'}
					</Link>
					<Link href='/pcd' className='nav_a'>
						{pathname === '/pcd' ? '⭐ PCD' : 'PCD'}
					</Link>
					<Link href='/crd' className='nav_a'>
						{pathname === '/crd' ? '⭐ CRD' : 'CRD'}
					</Link>
					<Link href='/forming' className='nav_a'>
						{pathname === '/forming' ? '⭐ Tube Forming' : 'Tube Forming'}
					</Link>
					<Link href='/spool' className='nav_a'>
						{pathname === '/spool' ? '⭐ Spool' : 'Spool'}
					</Link>
				</div>
			</nav>

			<div className='nav_btn'>
				{session ? (
					<span>
						🙋 {session.user.name} <LogoutBtn />
					</span>
				) : (
					<span>
						<LoginBtn />
					</span>
				)}
			</div>
		</div>
	);
}

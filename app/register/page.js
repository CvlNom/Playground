import Footer from '../component/Footer';

export default function Register() {
	return (
		<div className='pageBody'>
			<header>
				<title>Login & Sign up</title>
				{/* <h2>SIGN UP</h2> */}
				<link rel='icon' href='/logo.png' />
			</header>

			<main>
				<div>
					<form method='POST' action='/api/auth/signup' className='loginSignup'>
						<input name='name' type='text' required placeholder='Put your ID more than 5 letters' />
						{/* <p>Please make a unique name as possible. </p> */}
						<input name='email' type='text' required placeholder='E-mail Address' />
						<input name='password' type='password' required placeholder='Password' />
						<button type='submit' style={{ backgroundColor: 'lightgreen' }}>
							SIGN UP (회원가입)
						</button>
					</form>
				</div>
			</main>
			<aside id='asideRegister'>Image of wire clamp</aside>
			
		</div>
	);
}

//TODO: 아이디 유일하게 할 수 있도록 검증하는 절차
// 데이터 베이스 검색

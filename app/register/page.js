export default function Register() {
	return (
		<div className='pageBody'>
			<header>
				<title>Login & Sign up</title>
				<h2>SIGN UP</h2>
				<link rel='icon' href='/logo.png' />
			</header>

			<main>
				<div>
					<form method='POST' action='/api/auth/signup' className='loginSignup'>
						<input name='name' type='text' placeholder='Put your name' />
						<p>Please make a unique name as possible.  </p>
						<input name='email' type='text' placeholder='E-mail Address' />
						<input name='password' type='password' placeholder='Password' />
						<button type='submit'>SIGN UP</button>
					</form>
				</div>
			</main>
			<aside id='asideRegister'>Side</aside>
			<footer>
				author: Alex Kwak <br />
				&copy; copyright reserved.
				<small>We do not take any responsibility except on Contracts.</small>
				<br />
				<small>
					<a href='mailto:alexkwak24@gmail.com'> alexkwak24@gmail.com</a>
				</small>
			</footer>
		</div>
	);
}

//TODO: 아이디 유일하게 할 수 있도록 검증하는 절차
// 데이터 베이스 검색

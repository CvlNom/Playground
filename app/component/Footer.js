import Link from 'next/link';

const Footer = () => {
	return (
		<footer>
			<hr />
      <div>
			author:
			{/* <Link href='/aboutME' style={{ color: 'black' }}> */}
				Alex Kwak
			{/* </Link>{' '} */}
			<br />
			&copy; copyright reserved.
			<small>I do not take any responsibility except on Contracts.</small>
			<br />
			<small>
				<a href='mailto:alexkwak24@gmail.com'> alexkwak24@gmail.com</a>
			</small>
      </div>
		</footer>
	);
};

export default Footer;
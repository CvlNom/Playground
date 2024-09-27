import Link from "next/link";

const Footer = () => {
  return (
    // <footer className="mx-10 bg-slate-200 text-sm">
      <div className="h-16 m-0 px-12 bg-slate-200 text-sm">
      <hr className="border-1 border-gray-400"/>
        author:
        {/* <Link href='/aboutME' style={{ color: 'black' }}> */}
        Alex Kwak
        {/* </Link>{' '} */}
        <br />
        &copy; copyright reserved.
        <small>I do not take any responsibility except on Contracts.</small>
        <br />
        
          <a className="text-ms text-blue-700" href="mailto:alexkwak24@gmail.com"> alexkwak24@gmail.com</a>
        
      </div>
    // </footer>
  );
};

export default Footer;

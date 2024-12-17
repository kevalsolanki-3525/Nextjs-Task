import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="wrapper z-10">
        <div className="justify-between mx-auto -lg:max-w-7xl md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
              <Image src="/logo.svg" alt="Footer Logo" width={100} height={40} priority />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.png" alt="Footer Logo" width={30} height={30} priority />
                  ) : (
                    <Image
                      src="/hamburger.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-[40px]'>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex gap-[40px]">
                <li className="font-inter text-[14px] font-medium text-primary  hover:text-primary transition-all duration-300 ease-linear">
                  <Link href="\" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="font-inter text-[14px] font-medium text-black hover:text-primary transition-all duration-300 ease-linear ">
                  <Link href="" className='flex items-center gap-[10px]' onClick={() => setNavbar(!navbar)}>
                  Categories <Image src="/drop-down-icon.svg" alt='Drop Down Icon' width={12} height={10} />
                  </Link>
                </li>
                <li className="font-inter text-[14px] font-medium text-black hover:text-primary transition-all duration-300 ease-linear ">
                  <Link href="" onClick={() => setNavbar(!navbar)}>
                  Explore
                  </Link>
                </li>
                <li className="font-inter text-[14px] font-medium text-black hover:text-primary transition-all duration-300 ease-linear ">
                  <Link href="" onClick={() => setNavbar(!navbar)}>
                  About
                  </Link>
                </li>
                <li className="font-inter text-[14px] font-medium text-black hover:text-primary transition-all duration-300 ease-linear ">
                  <Link href="" onClick={() => setNavbar(!navbar)}>
                  Blog
                  </Link>
                </li>
                <li className="font-inter text-[14px] font-medium text-black hover:text-primary transition-all duration-300 ease-linear ">
                  <Link href="" onClick={() => setNavbar(!navbar)}>
                  Contact Us
                  </Link>
                </li>
              </ul>
            </div>
              <div className='flex items-center gap-5 max-1024:hidden'>
                <Link href="" ><Image src="/search-icon.svg" alt='Search Icon' width={38} height={38} /></Link>
                <Link href="" ><Image src="/user-icon.svg" alt='Search Icon' width={38} height={38} /></Link>
                <Link href="" ><Image src="/user-icon.svg" alt='Search Icon' width={38} height={38} /></Link>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
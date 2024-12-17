"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/navbars";



export default function Home() {
  return (
    <>
      <header>
        <div className="min-h-full w-full">
          <NavBar /> 
        </div>
      </header>
      
      




      {/* footersection */}
      <footer className="bg-black pt-[40px] lg:pt-[80px]">
        <div className="wrapper">
          <div className="footer-logo mb-5 ">
            <Image src="/footer-logo.svg" alt="Footer Logo" width={100} height={40} priority />
          </div>
          <div>
            <div className="grid max-480:grid-cols-1 max-767:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-[10px] md:gap-[30px] max-767:gap-[30px] pb-10">
              <div className="footer-details">
                <h6 className="font-inter font-semibold text-primary mb-5">Contact us</h6>
                <div className="mb-3"><Link href="Logo@gmail.com" className="text-white hover:text-primary transition-all duration-300 ease-linear font-inter">Logo@gmail.com </Link></div>
                <div className="mb-3"><Link href="tel:+911234567890" className="text-white hover:text-primary transition-all duration-300 ease-linear font-inter">+91 12345 67890 </Link></div>
                <p className="max-w-[243px] text-white mb-3">Lorem ipsum dolor sit amet consectetur. Nulla tempus elit nec.</p>
                <div className="flex gap-5">
                  <Link href="#"><Image src="/facebook.svg" alt="Facebook" width={20} height={20} priority /></Link>
                  <Link href="#"><Image src="/linked-in.svg" alt="LinkedIn" width={20} height={20} priority /></Link>
                  <Link href="#"><Image src="/twitter.svg" alt="Twitter" width={20} height={20} priority /></Link>
                  <Link href="#"><Image src="/instagram.svg" alt="Instagram" width={20} height={20} priority /></Link>
                </div>
              </div>

              <div>
                <h6 className="font-inter font-semibold text-primary mb-5">Products Links</h6>
                <ul>
                  <li className="mb-3"><Link href="#" className="text-white text-[14px] font-inter">Auctor volutpat.</Link></li>
                  <li className="mb-3"><Link href="#" className="text-white text-[14px] font-inter">Fermentum turpis.</Link></li>
                  <li className="mb-3"><Link href="#" className="text-white text-[14px] font-inter">Mi consequat.</Link></li>
                  <li className="mb-3"><Link href="#" className="text-white text-[14px] font-inter">Amet venenatis.</Link></li>
                  <li className=""><Link href="#" className="text-white text-[14px] font-inter">Convallis porttitor.</Link></li>
                </ul>
              </div>


              <div>
                <h6 className="font-inter font-semibold text-primary mb-5">Quick Links</h6>
                <ul>
                  <li className="mb-3"><Link href="#" className="text-white text-[14px] font-inter">Egestas vitae.</Link></li>
                  <li className="mb-3"><Link href="#" className="text-white text-[14px] font-inter">Viverra lorem ac.</Link></li>
                  <li className="mb-3"><Link href="#" className="text-white text-[14px] font-inter">Eget ac tellus.</Link></li>
                  <li className="mb-3"><Link href="#" className="text-white text-[14px] font-inter">Erat nulla.</Link></li>
                  <li className=""><Link href="#" className="text-white text-[14px] font-inter">Vulputate proin.</Link></li>
                </ul>
              </div>

              <div>
                <h6 className="font-inter font-semibold text-primary mb-5">Legal Links</h6>
                <ul>
                  <li className="mb-3"><Link href="#" className="text-white text-[14px] font-inter">Egestas vitae.</Link></li>
                  <li className="mb-3"><Link href="#" className="text-white text-[14px] font-inter">Viverra lorem ac.</Link></li>
                  <li className="mb-3"><Link href="#" className="text-white text-[14px] font-inter">Eget ac tellus.</Link></li>
                  <li className="mb-3"><Link href="#" className="text-white text-[14px] font-inter">Erat nulla.</Link></li>
                  <li className=""><Link href="#" className="text-white text-[14px] font-inter">Vulputate proin.</Link></li>
                </ul>
              </div>

              <div>
                <h6 className="font-inter font-semibold text-primary mb-5">Get the app</h6>
                <div className="mb-4"><Image src="/app-store.png" alt="" width={169} height={45} priority /></div>
                <div><Image src="/google-play.png" alt="" width={169} height={45} priority /></div>
              </div>

            </div>

          </div>
          <div className="text-center py-5">
            <p className="text-[#94A3B8] font-inter">Copyright © 2020. All rights reserved.</p>
          </div>
        </div>

      </footer>
      {/* end footersection */}
    </>
  );
}

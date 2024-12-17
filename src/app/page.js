"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/navbars";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';


export default function Home() {
  return (
    <>
      <header>
        <div className="min-h-full w-full">
          <NavBar /> 
        </div>
      </header>
      
      <section>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
        
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={2}
      
        >
          <SwiperSlide>
            <div className="w-full lg:flex bg-gry">
              <div className="text-left max-1024:w-full w-[50%] grid content-center px-[20px] lg:px-[200px]">
                <h1 className="font-inter leading-[77px] font-bold">Lorem ipsum dolor sit.</h1>
                <h6 className="my-10 text-light_gry">Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing pellentesque feugiat gravida tincidunt lobortis mi. Nisl sollicitudin in dictumst elementum amet nulla. Malesuada tempor consequat dui fringilla pretium. Egestas nibh et sociis enim nisl aliquet ultrices.</h6>
                <div className="flex items-center gap-10">
                  <Link href={""} className="border border-primary text-primary text-[15px] font-semibold px-[67.5px] py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">Explore</Link>
                  <Link href={""} className="border border-transparent bg-primary text-white text-[15px] font-semibold px-[67.5px] py-[14px] rounded-[8px] hover:bg-white hover:text-primary hover:border-primary transition-all duration-300 ease-linear">Buy Now</Link>
                </div>
              </div>
              <div className="max-1024:w-full w-[50%] max-1024:mt-[30px]">
                <Image src="/hero-img.jpg" alt="Hero Images" className="" width={720} height={688} priority />
              </div>
            </div>
          </SwiperSlide>
          
         
          


        </Swiper>
      </section>


      {/* feature-productsection */}
      <section className="py-[40px] lg:py-[80px] bg-gry">
        <div className="wrapper">
          <div className="max-480:flex-col max-480:gap-[20px] flex items-center justify-between mb-[60px] max-768:mb-[40px]">
            <h2 className="font-inter font-bold">Feature Products</h2>
            <Link href="#" className="bg-primary text-white text-[15px] font-semibold px-[70px] py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">View All</Link>
          </div>
          <div className="grid max-575:grid-cols-1 max-1023:grid-cols-2 grid-cols-4 gap-[20px] ">
            <div className="bg-white rounded-[12px] feature-product-desc">
              <div className="relative">
                <Image src="/feature1.jpg" alt="Product Images" className="rounded-t-[12px] w-full" width={295} height={248} priority />
                <div className="">
                  <Link href={""} className="absolute top-[10px] right-[10px]">
                    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" className="group" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white" />
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="#94A3B8" />
                      <path d="M23.6667 20.3333C24.66 19.36 25.6667 18.1933 25.6667 16.6667C25.6667 15.6942 25.2804 14.7616 24.5927 14.0739C23.9051 13.3863 22.9725 13 22 13C20.8267 13 20 13.3333 19 14.3333C18 13.3333 17.1733 13 16 13C15.0275 13 14.0949 13.3863 13.4073 14.0739C12.7197 14.7616 12.3333 15.6942 12.3333 16.6667C12.3333 18.2 13.3333 19.3667 14.3333 20.3333L19 25L23.6667 20.3333Z" stroke="#94A3B8" stroke-linecap="round" className="group-hover:fill-red-600 group-hover:stroke-red-600" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="">
                  <Link href={""} className="absolute bottom-[10px] left-[10px] flex items-center bg-white py-[2px] px-[4px] rounded-[4px] gap-[5px]">
                    <span className="font-inter">4.2</span>
                    <Image src="/star.png" alt="Star" width={14} height={14} priority />
                  </Link>
                </div>
              </div>
              <div className="py-5 px-[17px]">
                <h5 className="font-bold mb-[5px] font-inter ">Product Title</h5>
                <p className="text-light_gry font-inter">Lorem ipsum dolor sit amet consecte
                  tur. Ut vel magnis turpis malesuada.</p>
                <div className="flex gap-2 my-4">
                  <p className="font-bold font-inter">Rs.825</p>
                  <p className="line-through text-light_gry font-inter">Rs.4345</p>
                  <p className="text-theme_red font-inter">(81% off)</p>
                </div>
                <Link href={""} className="text-center font-inter block bg-primary text-white text-[15px] font-semibold py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">Add To Cart</Link>
              </div>
            </div>

            <div className="bg-white rounded-[12px] feature-product-desc">
              <div className="relative">
                <Image src="/feature2.jpg" alt="Product Images" className="rounded-t-[12px] w-full" width={295} height={248} priority />
                <div className="">
                  <Link href={""} className="absolute top-[10px] right-[10px]">
                    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" className="group" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white" />
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="#94A3B8" />
                      <path d="M23.6667 20.3333C24.66 19.36 25.6667 18.1933 25.6667 16.6667C25.6667 15.6942 25.2804 14.7616 24.5927 14.0739C23.9051 13.3863 22.9725 13 22 13C20.8267 13 20 13.3333 19 14.3333C18 13.3333 17.1733 13 16 13C15.0275 13 14.0949 13.3863 13.4073 14.0739C12.7197 14.7616 12.3333 15.6942 12.3333 16.6667C12.3333 18.2 13.3333 19.3667 14.3333 20.3333L19 25L23.6667 20.3333Z" stroke="#94A3B8" stroke-linecap="round" className="group-hover:fill-red-600 group-hover:stroke-red-600" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="">
                  <Link href={""} className="absolute bottom-[10px] left-[10px] flex items-center bg-white py-[2px] px-[4px] rounded-[4px] gap-[5px]">
                    <span className="font-inter">4.2</span>
                    <Image src="/star.png" alt="Star" width={14} height={14} priority />
                  </Link>
                </div>
              </div>
              <div className="py-5 px-[17px]">
                <h5 className="font-bold mb-[5px] font-inter ">Product Title</h5>
                <p className="text-light_gry font-inter">Lorem ipsum dolor sit amet consecte
                  tur. Ut vel magnis turpis malesuada.</p>
                <div className="flex gap-2 my-4">
                  <p className="font-bold font-inter">Rs.825</p>
                  <p className="line-through text-light_gry font-inter">Rs.4345</p>
                  <p className="text-theme_red font-inter">(81% off)</p>
                </div>
                <Link href={""} className="text-center font-inter block bg-primary text-white text-[15px] font-semibold py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">Add To Cart</Link>
              </div>
            </div>

            <div className="bg-white rounded-[12px] feature-product-desc">
              <div className="relative">
                <Image src="/feature3.jpg" alt="Product Images" className="rounded-t-[12px] w-full" width={295} height={248} priority />
                <div className="">
                  <Link href={""} className="absolute top-[10px] right-[10px]">
                    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" className="group" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white" />
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="#94A3B8" />
                      <path d="M23.6667 20.3333C24.66 19.36 25.6667 18.1933 25.6667 16.6667C25.6667 15.6942 25.2804 14.7616 24.5927 14.0739C23.9051 13.3863 22.9725 13 22 13C20.8267 13 20 13.3333 19 14.3333C18 13.3333 17.1733 13 16 13C15.0275 13 14.0949 13.3863 13.4073 14.0739C12.7197 14.7616 12.3333 15.6942 12.3333 16.6667C12.3333 18.2 13.3333 19.3667 14.3333 20.3333L19 25L23.6667 20.3333Z" stroke="#94A3B8" stroke-linecap="round" className="group-hover:fill-red-600 group-hover:stroke-red-600" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="">
                  <Link href={""} className="absolute bottom-[10px] left-[10px] flex items-center bg-white py-[2px] px-[4px] rounded-[4px] gap-[5px]">
                    <span className="font-inter">4.2</span>
                    <Image src="/star.png" alt="Star" width={14} height={14} priority />
                  </Link>
                </div>
              </div>
              <div className="py-5 px-[17px]">
                <h5 className="font-bold mb-[5px] font-inter ">Product Title</h5>
                <p className="text-light_gry font-inter">Lorem ipsum dolor sit amet consecte
                  tur. Ut vel magnis turpis malesuada.</p>
                <div className="flex gap-2 my-4">
                  <p className="font-bold font-inter">Rs.825</p>
                  <p className="line-through text-light_gry font-inter">Rs.4345</p>
                  <p className="text-theme_red font-inter">(81% off)</p>
                </div>
                <Link href={""} className="text-center font-inter block bg-primary text-white text-[15px] font-semibold py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">Add To Cart</Link>
              </div>
            </div>

            <div className="bg-white rounded-[12px] feature-product-desc">
              <div className="relative">
                <Image src="/feature4.jpg" alt="Product Images" className="rounded-t-[12px] w-full" width={295} height={248} priority />
                <div className="">
                  <Link href={""} className="absolute top-[10px] right-[10px]">
                    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" className="group" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white" />
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="#94A3B8" />
                      <path d="M23.6667 20.3333C24.66 19.36 25.6667 18.1933 25.6667 16.6667C25.6667 15.6942 25.2804 14.7616 24.5927 14.0739C23.9051 13.3863 22.9725 13 22 13C20.8267 13 20 13.3333 19 14.3333C18 13.3333 17.1733 13 16 13C15.0275 13 14.0949 13.3863 13.4073 14.0739C12.7197 14.7616 12.3333 15.6942 12.3333 16.6667C12.3333 18.2 13.3333 19.3667 14.3333 20.3333L19 25L23.6667 20.3333Z" stroke="#94A3B8" stroke-linecap="round" className="group-hover:fill-red-600 group-hover:stroke-red-600" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="">
                  <Link href={''} className="absolute bottom-[10px] left-[10px] flex items-center bg-white py-[2px] px-[4px] rounded-[4px] gap-[5px]">
                    <span className="font-inter">4.2</span>
                    <Image src="/star.png" alt="Star" width={14} height={14} priority />
                  </Link>
                </div>
              </div>
              <div className="py-5 px-[17px]">
                <h5 className="font-bold mb-[5px] font-inter ">Product Title</h5>
                <p className="text-light_gry font-inter">Lorem ipsum dolor sit amet consecte
                  tur. Ut vel magnis turpis malesuada.</p>
                <div className="flex gap-2 my-4">
                  <p className="font-bold font-inter">Rs.825</p>
                  <p className="line-through text-light_gry font-inter">Rs.4345</p>
                  <p className="text-theme_red font-inter">(81% off)</p>
                </div>
                <Link href={""} className="text-center font-inter block bg-primary text-white text-[15px] font-semibold py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">Add To Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end feature-productsection */}



      {/* shoppingsection */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="wrapper">
          <div className="grid max-601:grid-cols-1 max-1023:grid-cols-2 grid-cols-4 max-1023:gap-[30px]">
            <div className="flex items-center gap-4">
              <Image src="/free-shipping.svg" alt="Free Shipping" width={48} height={48} priority />
              <div>
                <h4 className="font-bold mb-[6px] font-inter">Free Shipping</h4>
                <h6 className="text-light_gry font-normal font-inter">Above all Orders over 200rs.</h6>
              </div>
            </div>

            <div className="flex items-center gap-4 max-1023:border-0 border-l border-[#E2E8F0] pl-[14px] max-1023:pl-0">
              <Image src="/rupee.svg" alt="Money Guarantee" width={48} height={48} priority />
              <div>
                <h4 className="font-bold mb-[6px] font-inter">Money Guarantee</h4>
                <h6 className="text-light_gry font-normal font-inter">45 Days for Exchange</h6>
              </div>
            </div>

            <div className="flex items-center gap-4 max-1023:border-0 border-l border-[#E2E8F0] pl-[14px] max-1023:pl-0">
              <Image src="/headphones.svg" alt="Online Support" width={48} height={48} priority />
              <div>
                <h4 className="font-bold mb-[6px] font-inter">Online Support</h4>
                <h6 className="text-light_gry font-normal font-inter">24/7 Customer Care</h6>
              </div>
            </div>

            <div className="flex items-center gap-4 max-1023:border-0 border-l border-[#E2E8F0] pl-[14px] max-1023:pl-0">
              <Image src="/credit-card.svg" alt="Flexible Payment" width={48} height={48} priority />
              <div>
                <h4 className="font-bold mb-[6px] font-inter">Flexible Payment</h4>
                <h6 className="text-light_gry font-normal font-inter">Pay with multiple Credit Card</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end shoppingsection */}


      {/* discountsection */}
      <section className="py-[40px] lg:py-[80px] bg-light_green">
        <div className="wrapper">
          <div className="shopping-bg relative">
            <Image src="/discount.png" alt="Discount banner" className="max-1023:hidden" width={1140} height={552} priority />
            <div className="max-1023:flex-col-reverse flex items-center justify-center absolute bottom-0 left-0 max-1023:relative max-1023:bg-primary max-1023:p-[40px] max-1023:rounded-[12px]">
              <div className="max-1023:pl-0 pl-[50px] max-w-[525px] max-1023:text-center">
                <h1 className="text-white leading-[77px] font-bold font-inter">Lorem ipsum dolor sit.</h1>
                <h6 className="text-white max-w-[535px] leading-[19px] max-1023:my-5 my-10 font-inter">Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing pellentesque feugiat gravida tincidunt lobortis mi. Nisl sollicitudin in dictumst elementum amet nulla. Malesuada tempor consequat dui fringilla pretium. Egestas nibh et sociis enim nisl aliquet ultrices.</h6>
                <button className="bg-white text-primary text-[15px] font-semibold px-[67.5px] py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">Buy Now</button>
              </div>

              <div>
                <Image src="/discount-offer.png" alt="Discount banner" width={612} height={552} priority />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end discountsection */}


      {/* feature-productsection */}
      <section className="py-[40px] lg:py-[80px] bg-gry">
        <div className="wrapper">
          <div className="max-601:flex-col max-601:gap-[20px] flex items-center justify-between mb-[60px]">
            <h2 className="font-inter font-bold">Most Popular Products</h2>
            <Link href="#" className="bg-primary text-white text-[15px] font-semibold px-[70px] py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">View All</Link>
          </div>
          <div className="grid max-575:grid-cols-1 max-1023:grid-cols-2 grid-cols-4  gap-x-[20px] gap-y-[60px] max-1023:gap-y-[20px]">
            <div className="bg-white rounded-[12px] feature-product-desc">
              <div className="relative">
                <Image src="/most-popular-products1.jpg" alt="Product Images" className="rounded-t-[12px] w-full" width={295} height={248} priority />
                <div className="">
                  <Link href={""} className="absolute top-[10px] right-[10px]">
                    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" className="group" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white" />
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="#94A3B8" />
                      <path d="M23.6667 20.3333C24.66 19.36 25.6667 18.1933 25.6667 16.6667C25.6667 15.6942 25.2804 14.7616 24.5927 14.0739C23.9051 13.3863 22.9725 13 22 13C20.8267 13 20 13.3333 19 14.3333C18 13.3333 17.1733 13 16 13C15.0275 13 14.0949 13.3863 13.4073 14.0739C12.7197 14.7616 12.3333 15.6942 12.3333 16.6667C12.3333 18.2 13.3333 19.3667 14.3333 20.3333L19 25L23.6667 20.3333Z" stroke="#94A3B8" stroke-linecap="round" className="group-hover:fill-red-600 group-hover:stroke-red-600" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="">
                  <Link href={""} className="absolute bottom-[10px] left-[10px] flex items-center bg-white py-[2px] px-[4px] rounded-[4px] gap-[5px]">
                    <span className="font-inter">4.2</span>
                    <Image src="/star.png" alt="Star" width={14} height={14} priority />
                  </Link>
                </div>
              </div>
              <div className="py-5 px-[17px]">
                <h5 className="font-bold mb-[5px] font-inter ">Product Title</h5>
                <p className="text-light_gry font-inter">Lorem ipsum dolor sit amet consecte
                  tur. Ut vel magnis turpis malesuada.</p>
                <div className="flex gap-2 my-4">
                  <p className="font-bold font-inter">Rs.825</p>
                  <p className="line-through text-light_gry font-inter">Rs.4345</p>
                  <p className="text-theme_red font-inter">(81% off)</p>
                </div>
                <Link href={""} className="text-center font-inter block bg-primary text-white text-[15px] font-semibold py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">Add To Cart</Link>
              </div>
            </div>

            <div className="bg-white rounded-[12px] feature-product-desc">
              <div className="relative">
                <Image src="/most-popular-products2.jpg" alt="Product Images" className="rounded-t-[12px] w-full" width={295} height={248} priority />
                <div className="">
                  <Link href={""} className="absolute top-[10px] right-[10px]">
                    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" className="group" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white" />
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="#94A3B8" />
                      <path d="M23.6667 20.3333C24.66 19.36 25.6667 18.1933 25.6667 16.6667C25.6667 15.6942 25.2804 14.7616 24.5927 14.0739C23.9051 13.3863 22.9725 13 22 13C20.8267 13 20 13.3333 19 14.3333C18 13.3333 17.1733 13 16 13C15.0275 13 14.0949 13.3863 13.4073 14.0739C12.7197 14.7616 12.3333 15.6942 12.3333 16.6667C12.3333 18.2 13.3333 19.3667 14.3333 20.3333L19 25L23.6667 20.3333Z" stroke="#94A3B8" stroke-linecap="round" className="group-hover:fill-red-600 group-hover:stroke-red-600" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="">
                  <Link href={""} className="absolute bottom-[10px] left-[10px] flex items-center bg-white py-[2px] px-[4px] rounded-[4px] gap-[5px]">
                    <span className="font-inter">4.2</span>
                    <Image src="/star.png" alt="Star" width={14} height={14} priority />
                  </Link>
                </div>
              </div>
              <div className="py-5 px-[17px]">
                <h5 className="font-bold mb-[5px] font-inter ">Product Title</h5>
                <p className="text-light_gry font-inter">Lorem ipsum dolor sit amet consecte
                  tur. Ut vel magnis turpis malesuada.</p>
                <div className="flex gap-2 my-4">
                  <p className="font-bold font-inter">Rs.825</p>
                  <p className="line-through text-light_gry font-inter">Rs.4345</p>
                  <p className="text-theme_red font-inter">(81% off)</p>
                </div>
                <Link href={""} className="text-center font-inter block bg-primary text-white text-[15px] font-semibold py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">Add To Cart</Link>
              </div>
            </div>

            <div className="bg-white rounded-[12px] feature-product-desc">
              <div className="relative">
                <Image src="/most-popular-products3.jpg" alt="Product Images" className="rounded-t-[12px] w-full" width={295} height={248} priority />
                <div className="">
                  <Link href={""} className="absolute top-[10px] right-[10px]">
                    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" className="group" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white" />
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="#94A3B8" />
                      <path d="M23.6667 20.3333C24.66 19.36 25.6667 18.1933 25.6667 16.6667C25.6667 15.6942 25.2804 14.7616 24.5927 14.0739C23.9051 13.3863 22.9725 13 22 13C20.8267 13 20 13.3333 19 14.3333C18 13.3333 17.1733 13 16 13C15.0275 13 14.0949 13.3863 13.4073 14.0739C12.7197 14.7616 12.3333 15.6942 12.3333 16.6667C12.3333 18.2 13.3333 19.3667 14.3333 20.3333L19 25L23.6667 20.3333Z" stroke="#94A3B8" stroke-linecap="round" className="group-hover:fill-red-600 group-hover:stroke-red-600" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="">
                  <Link href={""} className="absolute bottom-[10px] left-[10px] flex items-center bg-white py-[2px] px-[4px] rounded-[4px] gap-[5px]">
                    <span className="font-inter">4.2</span>
                    <Image src="/star.png" alt="Star" width={14} height={14} priority />
                  </Link>
                </div>
              </div>
              <div className="py-5 px-[17px]">
                <h5 className="font-bold mb-[5px] font-inter ">Product Title</h5>
                <p className="text-light_gry font-inter">Lorem ipsum dolor sit amet consecte
                  tur. Ut vel magnis turpis malesuada.</p>
                <div className="flex gap-2 my-4">
                  <p className="font-bold font-inter">Rs.825</p>
                  <p className="line-through text-light_gry font-inter">Rs.4345</p>
                  <p className="text-theme_red font-inter">(81% off)</p>
                </div>
                <Link href={""} className="text-center font-inter block bg-primary text-white text-[15px] font-semibold py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">Add To Cart</Link>
              </div>
            </div>

            <div className="bg-white rounded-[12px] feature-product-desc">
              <div className="relative">
                <Image src="/most-popular-products4.jpg" alt="Product Images" className="rounded-t-[12px] w-full" width={295} height={248} priority />
                <div className="">
                  <Link href={""} className="absolute top-[10px] right-[10px]">
                    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" className="group" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white" />
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="#94A3B8" />
                      <path d="M23.6667 20.3333C24.66 19.36 25.6667 18.1933 25.6667 16.6667C25.6667 15.6942 25.2804 14.7616 24.5927 14.0739C23.9051 13.3863 22.9725 13 22 13C20.8267 13 20 13.3333 19 14.3333C18 13.3333 17.1733 13 16 13C15.0275 13 14.0949 13.3863 13.4073 14.0739C12.7197 14.7616 12.3333 15.6942 12.3333 16.6667C12.3333 18.2 13.3333 19.3667 14.3333 20.3333L19 25L23.6667 20.3333Z" stroke="#94A3B8" stroke-linecap="round" className="group-hover:fill-red-600 group-hover:stroke-red-600" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="">
                  <Link href={''} className="absolute bottom-[10px] left-[10px] flex items-center bg-white py-[2px] px-[4px] rounded-[4px] gap-[5px]">
                    <span className="font-inter">4.2</span>
                    <Image src="/star.png" alt="Star" width={14} height={14} priority />
                  </Link>
                </div>
              </div>
              <div className="py-5 px-[17px]">
                <h5 className="font-bold mb-[5px] font-inter ">Product Title</h5>
                <p className="text-light_gry font-inter">Lorem ipsum dolor sit amet consecte
                  tur. Ut vel magnis turpis malesuada.</p>
                <div className="flex gap-2 my-4">
                  <p className="font-bold font-inter">Rs.825</p>
                  <p className="line-through text-light_gry font-inter">Rs.4345</p>
                  <p className="text-theme_red font-inter">(81% off)</p>
                </div>
                <Link href={""} className="text-center font-inter block bg-primary text-white text-[15px] font-semibold py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">Add To Cart</Link>
              </div>
            </div>

            <div className="bg-white rounded-[12px] feature-product-desc">
              <div className="relative">
                <Image src="/most-popular-products5.jpg" alt="Product Images" className="rounded-t-[12px] w-full" width={295} height={248} priority />
                <div className="">
                  <Link href={""} className="absolute top-[10px] right-[10px]">
                    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" className="group" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white" />
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="#94A3B8" />
                      <path d="M23.6667 20.3333C24.66 19.36 25.6667 18.1933 25.6667 16.6667C25.6667 15.6942 25.2804 14.7616 24.5927 14.0739C23.9051 13.3863 22.9725 13 22 13C20.8267 13 20 13.3333 19 14.3333C18 13.3333 17.1733 13 16 13C15.0275 13 14.0949 13.3863 13.4073 14.0739C12.7197 14.7616 12.3333 15.6942 12.3333 16.6667C12.3333 18.2 13.3333 19.3667 14.3333 20.3333L19 25L23.6667 20.3333Z" stroke="#94A3B8" stroke-linecap="round" className="group-hover:fill-red-600 group-hover:stroke-red-600" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="">
                  <Link href={''} className="absolute bottom-[10px] left-[10px] flex items-center bg-white py-[2px] px-[4px] rounded-[4px] gap-[5px]">
                    <span className="font-inter">4.2</span>
                    <Image src="/star.png" alt="Star" width={14} height={14} priority />
                  </Link>
                </div>
              </div>
              <div className="py-5 px-[17px]">
                <h5 className="font-bold mb-[5px] font-inter ">Product Title</h5>
                <p className="text-light_gry font-inter">Lorem ipsum dolor sit amet consecte
                  tur. Ut vel magnis turpis malesuada.</p>
                <div className="flex gap-2 my-4">
                  <p className="font-bold font-inter">Rs.825</p>
                  <p className="line-through text-light_gry font-inter">Rs.4345</p>
                  <p className="text-theme_red font-inter">(81% off)</p>
                </div>
                <Link href={""} className="text-center font-inter block bg-primary text-white text-[15px] font-semibold py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">Add To Cart</Link>
              </div>
            </div>

            <div className="bg-white rounded-[12px] feature-product-desc">
              <div className="relative">
                <Image src="/most-popular-products6.jpg" alt="Product Images" className="rounded-t-[12px] w-full" width={295} height={248} priority />
                <div className="">
                  <Link href={""} className="absolute top-[10px] right-[10px]">
                    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" className="group" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white" />
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="#94A3B8" />
                      <path d="M23.6667 20.3333C24.66 19.36 25.6667 18.1933 25.6667 16.6667C25.6667 15.6942 25.2804 14.7616 24.5927 14.0739C23.9051 13.3863 22.9725 13 22 13C20.8267 13 20 13.3333 19 14.3333C18 13.3333 17.1733 13 16 13C15.0275 13 14.0949 13.3863 13.4073 14.0739C12.7197 14.7616 12.3333 15.6942 12.3333 16.6667C12.3333 18.2 13.3333 19.3667 14.3333 20.3333L19 25L23.6667 20.3333Z" stroke="#94A3B8" stroke-linecap="round" className="group-hover:fill-red-600 group-hover:stroke-red-600" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="">
                  <Link href={''} className="absolute bottom-[10px] left-[10px] flex items-center bg-white py-[2px] px-[4px] rounded-[4px] gap-[5px]">
                    <span className="font-inter">4.2</span>
                    <Image src="/star.png" alt="Star" width={14} height={14} priority />
                  </Link>
                </div>
              </div>
              <div className="py-5 px-[17px]">
                <h5 className="font-bold mb-[5px] font-inter ">Product Title</h5>
                <p className="text-light_gry font-inter">Lorem ipsum dolor sit amet consecte
                  tur. Ut vel magnis turpis malesuada.</p>
                <div className="flex gap-2 my-4">
                  <p className="font-bold font-inter">Rs.825</p>
                  <p className="line-through text-light_gry font-inter">Rs.4345</p>
                  <p className="text-theme_red font-inter">(81% off)</p>
                </div>
                <Link href={""} className="text-center font-inter block bg-primary text-white text-[15px] font-semibold py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">Add To Cart</Link>
              </div>
            </div>

            <div className="bg-white rounded-[12px] feature-product-desc">
              <div className="relative">
                <Image src="/most-popular-products7.jpg" alt="Product Images" className="rounded-t-[12px] w-full" width={295} height={248} priority />
                <div className="">
                  <Link href={""} className="absolute top-[10px] right-[10px]">
                    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" className="group" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white" />
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="#94A3B8" />
                      <path d="M23.6667 20.3333C24.66 19.36 25.6667 18.1933 25.6667 16.6667C25.6667 15.6942 25.2804 14.7616 24.5927 14.0739C23.9051 13.3863 22.9725 13 22 13C20.8267 13 20 13.3333 19 14.3333C18 13.3333 17.1733 13 16 13C15.0275 13 14.0949 13.3863 13.4073 14.0739C12.7197 14.7616 12.3333 15.6942 12.3333 16.6667C12.3333 18.2 13.3333 19.3667 14.3333 20.3333L19 25L23.6667 20.3333Z" stroke="#94A3B8" stroke-linecap="round" className="group-hover:fill-red-600 group-hover:stroke-red-600" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="">
                  <Link href={''} className="absolute bottom-[10px] left-[10px] flex items-center bg-white py-[2px] px-[4px] rounded-[4px] gap-[5px]">
                    <span className="font-inter">4.2</span>
                    <Image src="/star.png" alt="Star" width={14} height={14} priority />
                  </Link>
                </div>
              </div>
              <div className="py-5 px-[17px]">
                <h5 className="font-bold mb-[5px] font-inter ">Product Title</h5>
                <p className="text-light_gry font-inter">Lorem ipsum dolor sit amet consecte
                  tur. Ut vel magnis turpis malesuada.</p>
                <div className="flex gap-2 my-4">
                  <p className="font-bold font-inter">Rs.825</p>
                  <p className="line-through text-light_gry font-inter">Rs.4345</p>
                  <p className="text-theme_red font-inter">(81% off)</p>
                </div>
                <Link href={""} className="text-center font-inter block bg-primary text-white text-[15px] font-semibold py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">Add To Cart</Link>
              </div>
            </div>

            <div className="bg-white rounded-[12px] feature-product-desc">
              <div className="relative">
                <Image src="/most-popular-products8.jpg" alt="Product Images" className="rounded-t-[12px] w-full" width={295} height={248} priority />
                <div className="">
                  <Link href={""} className="absolute top-[10px] right-[10px]">
                    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" className="group" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="white" />
                      <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="#94A3B8" />
                      <path d="M23.6667 20.3333C24.66 19.36 25.6667 18.1933 25.6667 16.6667C25.6667 15.6942 25.2804 14.7616 24.5927 14.0739C23.9051 13.3863 22.9725 13 22 13C20.8267 13 20 13.3333 19 14.3333C18 13.3333 17.1733 13 16 13C15.0275 13 14.0949 13.3863 13.4073 14.0739C12.7197 14.7616 12.3333 15.6942 12.3333 16.6667C12.3333 18.2 13.3333 19.3667 14.3333 20.3333L19 25L23.6667 20.3333Z" stroke="#94A3B8" stroke-linecap="round" className="group-hover:fill-red-600 group-hover:stroke-red-600" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="">
                  <Link href={''} className="absolute bottom-[10px] left-[10px] flex items-center bg-white py-[2px] px-[4px] rounded-[4px] gap-[5px]">
                    <span className="font-inter">4.2</span>
                    <Image src="/star.png" alt="Star" width={14} height={14} priority />
                  </Link>
                </div>
              </div>
              <div className="py-5 px-[17px]">
                <h5 className="font-bold mb-[5px] font-inter ">Product Title</h5>
                <p className="text-light_gry font-inter">Lorem ipsum dolor sit amet consecte
                  tur. Ut vel magnis turpis malesuada.</p>
                <div className="flex gap-2 my-4">
                  <p className="font-bold font-inter">Rs.825</p>
                  <p className="line-through text-light_gry font-inter">Rs.4345</p>
                  <p className="text-theme_red font-inter">(81% off)</p>
                </div>
                <Link href={""} className="text-center font-inter block bg-primary text-white text-[15px] font-semibold py-[14px] rounded-[8px] hover:bg-primary hover:text-white transition-all duration-300 ease-linear">Add To Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end feature-productsection */}


      {/* popularbrands */}
      <section className="py-[40px] lg:pt-[80px] lg:pb-[50px]">
        <div className="wrapper">
            <div>
              <h2 className="font-bold mb-[60px] font-inter leading-[48px]">Customers Review</h2>
            </div>
        </div>

        <div className="">
          
          <div>
            <Swiper
                slidesPerView={7}
                spaceBetween={10}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  575: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 7,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={10}
               
                modules={[Autoplay]}
                className="brandofcompanySwiper"
                >

                <SwiperSlide>
                  <div className="text-left ">
                      <Image src="/converse.png" alt="Converse" className="max-w-[168px]" width={168} height={118} priority />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="text-left ">
                      <Image src="/adidas.png" alt="Adidas" className="max-w-[168px]" width={168} height={118} priority />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="text-left ">
                      <Image src="/chanel.png" alt="Chanel" className="max-w-[168px]" width={168} height={118} priority />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="text-left ">
                      <Image src="/pumma.png" alt="Pumma" className="max-w-[168px]" width={168} height={118} priority />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="text-left ">
                      <Image src="/skechers.png" alt="Skechers" className="max-w-[168px]" width={168} height={118} priority />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="text-left ">
                      <Image src="/forever-21.png" alt="Forever 21" className="max-w-[168px]" width={168} height={118} priority />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="text-left ">
                      <Image src="/fila.png" alt="Fila" className="max-w-[168px]" width={168} height={118} priority />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="text-left ">
                      <Image src="/lacoste.png" alt="Lacoste" className="max-w-[168px]" width={168} height={118} priority />
                  </div>
                </SwiperSlide>

                
                
                
            </Swiper>
          </div>
        </div>
      </section>
      {/* end popularbrands */}


      {/* categories */}
      <section className="py-[40px] lg:py-[80px]">
        <div className="wrapper">
          <div>
            <h2 className="font-bold mb-[60px] font-inter">Categories</h2>
          </div>
          <div className="grid max-768:grid-cols-2 grid-cols-4 lg:grid-cols-8 md:gap-[30px] max-767:gap-[30px] ">
            <div className="mx-auto text-center">
              <Image src="/man.png" alt="Men" width={100} height={100} priority />
              <h6 className="font-bold mt-5">Men</h6>
            </div>

            <div className="mx-auto text-center">
              <Image src="/women.png" alt="Women" width={100} height={100} priority />
              <h6 className="font-bold mt-5">Women</h6>
            </div>

            <div className="mx-auto text-center">
              <Image src="/kids.png" alt="Kids" width={100} height={100} priority />
              <h6 className="font-bold mt-5">Kids</h6>
            </div>

            <div className="mx-auto text-center">
              <Image src="/cosmetics.png" alt="Cosmetics" width={100} height={100} priority />
              <h6 className="font-bold mt-5">Cosmetics</h6>
            </div>

            <div className="mx-auto text-center">
              <Image src="/accessories.png" alt="Accessories" width={100} height={100} priority />
              <h6 className="font-bold mt-5">Accessories</h6>
            </div>

            <div className="mx-auto text-center">
              <Image src="/home.png" alt="Home" width={100} height={100} priority />
              <h6 className="font-bold mt-5">Home</h6>
            </div>

            <div className="mx-auto text-center">
              <Image src="/footwears.png" alt="Footwears" width={100} height={100} priority />
              <h6 className="font-bold mt-5">Footwears</h6>
            </div>

            <div className="mx-auto text-center">
              <Image src="/sports.png" alt="Sports" width={100} height={100} priority />
              <h6 className="font-bold mt-5">Sports</h6>
            </div>


          </div>
        </div>
      </section>
      {/* end categories */}


      {/* customers review */}
      <section className="py-[40px] lg:pt-[80px] lg:pb-[50px]">
        <div className="wrapper">
          <div>
            <h2 className="font-bold mb-[40px] font-inter leading-[48px]">Customers Review</h2>
          </div>
          <div>
          <Swiper
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                575: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="clientreviewSwiper"
              >
              <SwiperSlide>
                <div className="text-left border border-1 p-[23px] rounded-[10px] mb-[30px]">
                  <div className="flex items-start justify-between">
                    <Image src="/client-review1.jpg" alt="Sports" className="max-w-[60px]" width={60} height={60} priority />
                    <Image src="/star-1.svg" alt="Sports" className="max-w-[131.43px]" width={131.43} height={23.19} priority />
                  </div>
                  <h4 className="my-5 font-inter font-semibold">Floyd Miles</h4>
                  <p className="font-inter font-normal text-light_gry leading-[16.94px]">ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

              </SwiperSlide>

              <SwiperSlide>
                <div className="text-left border border-1 p-[23px] rounded-[10px] mb-[30px]">
                  <div className="flex items-start justify-between">
                    <Image src="/client-review2.jpg" alt="Sports" className="max-w-[60px]" width={60} height={60} priority />
                    <Image src="/star-2.svg" alt="Sports" className="max-w-[131.43px]" width={131.43} height={23.19} priority />
                  </div>
                  <h4 className="my-5 font-inter font-semibold">Floyd Miles</h4>
                  <p className="font-inter font-normal text-light_gry leading-[16.94px]">ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

              </SwiperSlide>

              <SwiperSlide>
                <div className="text-left border border-1 p-[23px] rounded-[10px] mb-[30px]">
                  <div className="flex items-start justify-between">
                    <Image src="/client-review3.jpg" alt="Sports" className="max-w-[60px]" width={60} height={60} priority />
                    <Image src="/star-3.svg" alt="Sports" className="max-w-[131.43px]" width={131.43} height={23.19} priority />
                  </div>
                  <h4 className="my-5 font-inter font-semibold">Floyd Miles</h4>
                  <p className="font-inter font-normal text-light_gry leading-[16.94px]">ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

              </SwiperSlide>

              <SwiperSlide>
                <div className="text-left border border-1 p-[23px] rounded-[10px] mb-[30px]">
                  <div className="flex items-start justify-between">
                    <Image src="/client-review1.jpg" alt="Sports" className="max-w-[60px]" width={60} height={60} priority />
                    <Image src="/star-1.svg" alt="Sports" className="max-w-[131.43px]" width={131.43} height={23.19} priority />
                  </div>
                  <h4 className="my-5 font-inter font-semibold">Floyd Miles</h4>
                  <p className="font-inter font-normal text-light_gry leading-[16.94px]">ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

              </SwiperSlide>

              <SwiperSlide>
                <div className="text-left border border-1 p-[23px] rounded-[10px] mb-[30px]">
                  <div className="flex items-start justify-between">
                    <Image src="/client-review2.jpg" alt="Sports" className="max-w-[60px]" width={60} height={60} priority />
                    <Image src="/star-2.svg" alt="Sports" className="max-w-[131.43px]" width={131.43} height={23.19} priority />
                  </div>
                  <h4 className="my-5 font-inter font-semibold">Floyd Miles</h4>
                  <p className="font-inter font-normal text-light_gry leading-[16.94px]">ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

              </SwiperSlide>

              
          </Swiper>
          </div>
        </div>
      </section>
      {/* end customers review */}


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

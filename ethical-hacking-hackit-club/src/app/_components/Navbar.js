'use client';

import Link from 'next/link';
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { usePathname } from 'next/navigation'
import { navigation } from "../constants/index";
import Button from "./design/Button";
import MenuSvg from "../_assets/svg/MenuSvg";
import { HamburgerMenu } from "../_components/design/Header";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50  lg:bg-n-8/20 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
                }`}
            id='top-id'
            >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <Link className="block w-[12rem] xl:mr-8" href="/">
                    <div className='flex items-center justify-center hover:text-color-4 '>
                        <img src='/imgs/sggs.png' width={70} height={40} alt="SGGS" />
                        <div className='border-2 border-white mx-4 h-[40px] '></div>
                        <img src={'/imgs/icon.png'} width={50} height={40} alt="Hackit" />
                        <span className='px-2 font-bold hover:cursor-pointer '>HACKIT</span>
                    </div>
                </Link>

                <nav
                    className={`${openNavigation ? "flex" : "hidden"
                        } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <div className="relative flex flex-col items-center justify-center m-auto z-2 lg:flex-row">
                        {navigation.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-[20px] uppercase text-n-6 transition-colors hover:text-color-4 ${item.onlyMobile ? "lg:hidden" : ""
                                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-[18px] lg:hover:border-b md:font-bold md:text-2xl lg:font-semibold ${item.url === pathname.hash
                                        ? "z-2 lg:text-n-6"
                                        : "lg:text-n-1"
                                    } lg:leading-5 lg:hover:text-n-6 xl:px-12`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    <HamburgerMenu />
                </nav>


                <Button white={false} className="hidden lg:flex" href="#hero" onClick={(e) => { e.preventDefault(); }}>
                    Lets Go
                </Button>

                <Button
                    className="ml-auto lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
}

export default Navbar
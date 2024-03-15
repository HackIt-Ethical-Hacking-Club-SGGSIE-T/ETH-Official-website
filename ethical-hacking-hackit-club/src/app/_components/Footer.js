import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "../_components/design/Section";
import { socials } from '../constants/index';

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex items-center justify-center gap-10 sm:justify-between max-sm:flex-col">
                <Link href='#top-id'>
                    <img src="/imgs/icon.png" alt="hackit" width={50} height={16} />
                </Link>
                <p className="caption text-n-1 lg:block text-[14px]">
                    CopyRight © {new Date().getFullYear()}. All rights reserved | Official Hacking Club SGGSIE&T
                </p>

                <ul className="flex flex-wrap gap-5">
                    {
                        socials.map((item) =>
                        (
                            <a
                                key={item.id}
                                href={item.url}
                                target="_blank"
                                className="flex items-center justify-center w-10 h-10 transition-colors bg-white rounded-lg hover:bg-n-6 hover:cursor-pointer"
                            >
                                <Image src={item.iconUrl} width={40} height={16} alt={item.title} />
                                {/* <span>{item.title}</span> */}
                            </a>
                        ))}
                </ul>
            </div>
        </Section>
    );
};

export default Footer;

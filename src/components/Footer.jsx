import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import facebook from "../../public/images/facebook.png";
import instagram from "../../public/images/instagram.png";
import Link from "next/link";
import { ChevronRightIcon,ClockIcon,MapPinIcon,EnvelopeIcon,PhoneIcon } from '@heroicons/react/24/outline'

const Footer = () => {
    return (
        <footer className="mt-8 lg:mt-28 bg-black bg-opacity-85 p-5">
            <div className="mx-auto max-w-7xl py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
                    <div className="flex flex-col gap-5 ">
                        <Image alt="Your Company"
                            src={logo}
                            className="h-8 w-fit" />
                        <p className="text-[18px] text-white">Taciti dapibus per ultrices conubia amet magna proin egestas. Magnis sit senectus sociosqu duis suspendisse.</p>
                        <div className="flex gap-4">
                            <Link href="#">
                                <Image src={facebook} alt="facebook" className="w-8 h-8" />
                            </Link>
                            <Link href="#">
                                <Image src={instagram} alt="instagram" className="w-8 h-8" />
                            </Link>

                        </div>
                    </div>
                    <div className="flex flex-col gap-5 text-white">
                        <h2 className="text-[19px]">Quick Links</h2>
                        <ul className="flex flex-col gap-5">
                            <li className="flex gap-x-5 items-center">
                                <ChevronRightIcon className="w-5 h-5 text-[#b2be59]" />
                                <Link href="#" className="capitalize text-sm sm:text-[17px]">About us</Link>
                            </li>
                            <li className="flex gap-x-5 items-center">
                                <ChevronRightIcon className="w-5 h-5 text-[#b2be59]" />
                                <Link href="#" className="capitalize text-sm sm:text-[17px]">Services</Link>
                            </li>
                            <li className="flex gap-x-5 items-center">
                                <ChevronRightIcon className="w-5 h-5 text-[#b2be59]" />
                                <Link href="#" className="capitalize text-sm sm:text-[17px]">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5 text-white">
                        <h2 className="text-[19px]">Opening Hours</h2>
                        <ul className="flex flex-col gap-5 ">
                            <li className="flex gap-x-5 items-center">
                                <ClockIcon className="w-5 h-5 text-[#b2be59]" />
                                <p href="#" className="capitalize text-sm sm:text-[17px]">Mon-Fri : 10am-19pm</p>
                            </li>
                            <li className="flex gap-x-5 items-center">
                                <ClockIcon className="w-5 h-5 text-[#b2be59]" />
                                <p href="#" className="capitalize text-sm sm:text-[17px]">Saturday : 10am-16pm</p>
                            </li>
                            <li className="flex gap-x-5 items-center">
                                <ClockIcon className="w-5 h-5 text-[#b2be59]" />
                                <p href="#" className="capitalize text-sm sm:text-[17px]">Sunday : Closed</p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5 text-white">
                        <h2 className="text-[19px] capitalize">Get in Touch</h2>
                        <ul className="flex flex-col gap-5 ">
                            <li className="flex gap-x-5 items-center">
                                <MapPinIcon className="w-5 h-5 text-[#b2be59]" />
                                <p href="#" className="capitalize text-sm sm:text-[17px]">Jln Cempaka Wangi No 22, Jakarta - Indonesia</p>
                            </li>
                            <li className="flex gap-x-5 items-center">
                                <EnvelopeIcon className="w-5 h-5 text-[#b2be59]" />
                                <p href="#" className="capitalize text-sm sm:text-[17px]">hello@yourdomain.tld</p>
                            </li>
                            <li className="flex gap-x-5 items-center">
                                <PhoneIcon className="w-5 h-5 text-[#b2be59]" />
                                <p href="#" className="capitalize text-sm sm:text-[17px]">+6221 2002 2012</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </footer>

    )
}

export default Footer
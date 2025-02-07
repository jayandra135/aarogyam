import React,{useState,useEffect } from 'react'
import { Disclosure, DisclosureButton,  Dialog,DialogPanel, DialogTitle } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../../public/images/logo.png"
import Image from 'next/image'
import Link from 'next/link';
import {  } from '@headlessui/react'



const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About Us', href: '#', current: false },
  { name: 'Services', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
   
    document.documentElement.style.scrollBehavior = 'smooth';

 
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
    <Disclosure 
    as="nav" 
    // className="w-full absolute "
    className={classNames(
      'w-full transition-all duration-300 z-50',
      isScrolled ? 'fixed top-0 left-0 right-0' : 'absolute'
    )}
    >
      <div 
      // className="mx-auto bg-white mt-5  max-w-7xl px-2 sm:px-6 lg:px-8 border-l-4 border-[#b2be59]"
      className={classNames(
        'mx-auto bg-white transition-all duration-300',
        isScrolled ? 'w-full px-4' : 'mt-5 max-w-7xl px-2 sm:px-6 lg:px-8 border-l-4 border-[#b2be59]'
      )}
      >
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button onClick={() => setOpen(true)}>
            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden"   />
            </button>
            {/* <DisclosureButton   className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#b2be59] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton> */}
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                alt="Your Company"
                src={logo}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    style={{fontFamily:"Oxygen, sans-serif",fontSize:"14px"}}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-[#b2be59] text-white' : 'text-black  hover:text-[#b2be59]',
                      'rounded-md px-3 py-2 text-sm font-medium uppercase whitespace-nowrap',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </Disclosure>
    <Dialog open={open} onClose={setOpen} className="relative z-50 sm:hidden">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10 ">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:-translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
           
                    <div className="mr-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="absolute -inset-2.5" />
                       
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                <div className="flex flex-col ">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    style={{fontFamily:"Oxygen, sans-serif",fontSize:"14px"}}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-[#b2be59] text-white' : 'text-black  hover:text-[#b2be59]',
                      'rounded-md px-3 py-2 text-sm font-medium uppercase',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
    </>
  )
}

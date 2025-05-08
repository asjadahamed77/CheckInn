"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Book a stay",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a tour",
    description: "Speak directly to your customers",
    href: "#",
    icon: PaperAirplaneIcon,
  },

  {
    name: "Contact our support team",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];

const callsToAction = [
  { name: "See demo bookings", href: "#", icon: PlayCircleIcon },
  { name: "Contact Support", href: "#", icon: PhoneIcon },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-gradient-to-r from-[#031a09] via-[#316c40] to-[#294e28] text-white">
      <nav
        className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8"
        area-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <p className="text-lg">
              Check<span className="text-slate-300">Inn</span>
            </p>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className={"relative"}>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Stays
              <ChevronDownIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white text-mainGreen -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-mainGreen group-hover:bg-gray-200">
                        <item.icon
                          className="h-6 w-6  text-secondaryGreen"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-secondaryGreen"
                        >
                          {item.name}
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-offGreen">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className=" flex items-center justify-center  gap-x-2.5  p-3 text-sm font-semibold leading-6 text-offGreen hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-secondaryGreen"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold leading-6 text-secondaryGreen">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Flights
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Car Rentals
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Attractions
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Flight + Hotel
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className={"lg:hidden"}
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          className={
            "fixed text-white inset-y-0 right-0 z-10 w-full overflow-y-auto bg-mainGreen px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          }
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <p className="text-lg">
                Check<span className="text-slate-300">Inn</span>
              </p>
            </Link>
            <button>
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
                onClick={() => setMobileMenuOpen(false)}
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-900/10">
              <div className="space-y-2 py-6">
                <Disclosure as={"div"} className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full flex items-center font-semibold justify-between rounded-lg py-2 pl-3 pr-3.5  text-base leading-7 text-white hover:bg-white/10  ">
                        Stays
                        <ChevronDownIcon
                          className={`h-5 w-5 text-white  ${
                            open ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-white/30"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
             <div className="flex flex-col space-y-4">
             <a href="#"   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/10">
            Flights
          </a>
          <a href="#"   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/10">
            Car Rentals
          </a>
          <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/10">
            Attractions
          </a>
          <a href="#"  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/10">
            Flight + Hotel
          </a>
             </div>
             <div className="py-6">
<a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/10">Log in</a>
             </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;

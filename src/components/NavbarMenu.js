import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import logos from "../assets/img/Montluxewatchlogo.png";
import { useCartContext } from "./CartContext";

// Main component
export default function NavbarMenu() {
    const [cartOpen, setCartOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const { cartItems } = useCartContext();
    const handleCloseMenu = () => {
        setOpen(false);
    };
    return (
        <div className="bg-gray-900 text-white">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-40 lg:hidden"
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-black pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XMarkIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    {/* navigation links */}
                                    <Link
                                        to="/"
                                        className="-m-2 block p-2 font-medium text-white"
                                        onClick={handleCloseMenu}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/about"
                                        className="-m-2 block p-2 font-medium text-white"
                                        onClick={handleCloseMenu}
                                    >
                                        About
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="-m-2 block p-2 font-medium text-white"
                                        onClick={handleCloseMenu}
                                    >
                                        Contact
                                    </Link>
                                    
                                </div>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    <div className="flow-root">
                                        <div className="flow-root">
                                            <Link
                                                to="/login"
                                                className="-m-2 block p-2 font-medium text-white"
                                            >
                                                Sign in
                                            </Link>
                                        </div>
                                        <div className="flow-root">
                                            <Link
                                                to="/signup"
                                                className="-m-2 block p-2 font-medium text-white"
                                            >
                                                Create account
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-gray-900">
                <p className="flex h-10 items-center justify-center bg-slate-800 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Get free delivery on orders over kshs 100,000
                </p>

                {/* Main navigation */}
                <nav
                    aria-label="Top"
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                >
                    <div className="border-b border-gray-700">
                        {/* Darker border color */}
                        <div className="flex h-16 items-center">
                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="relative rounded-md bg-black p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <span className="sr-only">
                                    Distribute-X Company
                                </span>
                                <img
                                    className="h-8 w-auto"
                                    src={logos}
                                    alt="Mont Luxe Watch Company logo"
                                />
                                <span className="ml-2 text-xl font-semibold">
                                    Distribute-X Company
                                </span>
                            </div>

                            {/* Desktop menu - Just the Homepage link */}
                            <div className="hidden lg:ml-8 lg:flex lg:space-x-8">
                                <Link
                                    to="/"
                                    className="flex items-center text-sm font-medium text-white hover:text-gray-300"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    className="flex items-center text-sm font-medium text-white hover:text-gray-300"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/contact"
                                    className="flex items-center text-sm font-medium text-white hover:text-gray-300"
                                >
                                    Contact
                                </Link>
                                {/* LINK FOR ADMIN LOG-IN */}
                                <Link
                                    to="/admin-login" 
                                    className="-m-2 block p-2 font-medium text-white"
                                    onClick={handleCloseMenu}
                                 >
                                    Admin Login
                                </Link>
                            </div>

                            <div className="ml-auto flex items-center">
                                {/* Sign in and Create account links */}
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <Link
                                        to="/login"
                                        className="text-sm font-medium text-white hover:text-gray-300"
                                    >
                                        Sign in
                                    </Link>
                                    <span
                                        className="h-6 w-px bg-gray-600"
                                        aria-hidden="true"
                                    />
                                    <Link
                                        to="/signup"
                                        className="text-sm font-medium text-white hover:text-gray-300"
                                    >
                                        Create account
                                    </Link>
                                </div>

                                {/* Search - !! might remove*/}
                                <div className="flex lg:ml-6">
                                    <a
                                        href="#"
                                        className="p-2 text-gray-300 hover:text-white"
                                    >
                                        {/* Light text and hover effect */}
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>

                                {/* Cart Icon */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <button
                                        className="group -m-2 flex items-center p-2"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCartOpen(!cartOpen);
                                        }}
                                    >
                                        <ShoppingBagIcon
                                            className="h-6 w-6 flex-shrink-0 text-gray-300 group-hover:text-white"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-2 text-sm font-medium text-white group-hover:text-gray-300">
                                            {cartItems.length}
                                        </span>
                                        <span className="sr-only">
                                            items in cart, view bag
                                        </span>
                                    </button>
                                </div>

                                {/* ShoppingCart Component */}
                                {cartOpen && (
                                    <ShoppingCart
                                        open={cartOpen}
                                        setOpen={setCartOpen}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

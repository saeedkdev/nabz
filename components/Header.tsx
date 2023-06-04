"use client"

import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from '@/components/Button';

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className,
}) => {

    const router = useRouter();

    const handleLogout = () => {
        // TODO: handle logout
    }

    return (
        <div
            className={twMerge(`
                h-fit bg-gradient-to-b from-teal-900 p-6
            `, className)}
        >
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center"> 
                    <button
                        onClick={() => router.back()}
                        className="rounded-full bg-neutral-900 flex items-center justify-center hover:opacity-75 transition"
                    >
                        <RxCaretLeft className="text-white" size={30} />
                    </button>
                    <button
                        onClick={() => router.forward()}
                        className="rounded-full bg-neutral-900 flex items-center justify-center hover:opacity-75 transition"
                    >
                        <RxCaretRight className="text-white" size={30} />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="rounded-full p-2 bg-slate-300 flex items-center hover:opacity-75 transition">
                        <HiHome className="text-black" size={20} />
                    </button>
                    <button className="rounded-full p-2 bg-slate-300 flex items-center hover:opacity-75 transition">
                        <BiSearch className="text-black" size={20} />
                    </button>
                </div>
                <div className="flex items-center justify-between gap-x-4">
                    <>
                        <div>
                            <Button className="bg-transparent text-neutral-300 font-medium">
                                Sign up
                            </Button>
                        </div>
                        <div>
                            <Button className="bg-white px-6 py-2">
                                Log in
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header;

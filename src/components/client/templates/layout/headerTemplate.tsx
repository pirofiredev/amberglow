"use client"

import RefreshButton from '@/components/client/elements/refreshButton';
import ThemeSwitchButton from '@/components/client/elements/themeSwitchButton';
import Image from 'next/image';
import Link from "next/link";
import type React from "react";


export default function Header( {children}: { children: React.ReactNode; }) {
    return (
        <header className="flex items-center py-4 border-b border-b-(--border) font-mono relative">

            <Link href={"/"} className={"logo-wrap flex flex-row items-center gap-2"}>
                <Image
                    src="/amberglow.svg"
                    alt="logo"
                    quality={100}
                    width={30}
                    height={30}
                />
                <p className={"font-bold text-sm text-(--foreground)"}>amberglow</p>
                <div className={"consoleBar bg-(--primary) w-2 h-[0.05em] animate-blink mt-[10%]"}></div>

            </Link>

            <nav className={"flex items-center grow gap-4 ml-5 "}>

                <div className={"right-nav flex flex-row items-center gap-4 ml-auto"}>
                    <RefreshButton />
                    <ThemeSwitchButton />
                    {children}
                </div>

            </nav>

        </header>
    );
}
'use server'
import Image from 'next/image';
import NavButtonActive from "@/components/ui/navButtonActive";
import NavButtonInactive from "@/components/ui/navButtonInactive";
import RefreshButton from '../ui/refreshButton';
import ThemeSwitchButton from '../ui/themeSwitchButton';

export default async function Header() {
    return (
        <header className="flex items-center py-4 font-(--spacemono) border-b border-b-(--border)">

            <div className={"logo-wrap flex flex-row items-center gap-2"}>
                <Image
                    src="/amberglow.svg"
                    alt="logo"
                    quality={100}
                    width={30}
                    height={30}
                />
                <p className={"font-bold text-sm text-(--foreground)"}>amberglow</p>
                <div className={"consoleBar bg-(--primary) w-2 h-[0.05em] animate-blink mt-[10%]"}></div>

            </div>

            <nav className={"flex items-center grow gap-4 ml-5"}>
                <NavButtonActive
                    title={"feed"}
                    width={55}
                    height={20}
                />

                <NavButtonInactive
                    title={"expanded"}
                />

                <NavButtonInactive //TODO will be removed on release
                    title={"loading"}
                />

                <div className='refreshBtnContainer ml-auto'>
                    <RefreshButton />
                </div>

                <ThemeSwitchButton />
            </nav>

        </header>
    );
}
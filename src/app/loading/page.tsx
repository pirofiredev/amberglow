"use server"

import Header from "@/components/layout/header";
import Image from 'next/image';
import LoadingPost from "@/components/ui/loadingPost";

export default async function loadingPage() {
    return (
        <>
            <Header/>

            <div className={"loading-container flex flex-col items-center mt-30 grow w-full gap-5"}>
                <Image
                    src="/amberglow.svg"
                    alt="logo"
                    quality={100}
                    width={75}
                    height={75}
                    className={"animate-spinner"}
                />

                <span className={"flex flex-row"}>
                    <p className={"text-(--muted-foreground) font-mono"}>fetching stuff</p>
                    <div className={"consoleBar bg-(--primary) w-2 h-[0.05em] animate-blink mt-[15%] ml-1.5"}></div>
                </span>


                <LoadingPost />
                <LoadingPost />
                <LoadingPost />

            </div>
        </>
    );
}
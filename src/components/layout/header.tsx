'use server'

import RefreshButton from '../ui/refreshButton';
import ThemeSwitchButton from '../ui/themeSwitchButton';
import FilterButton from '../ui/filterButton';
import NavButton from "../ui/navButton"

import { createClient } from '@/lib/supabase/server'
import Image from 'next/image';


interface Tag {
    id: number;
    tagName: string;
}

export default async function Header() {


    async function fetchTags(): Promise<Tag[]> {
        const supabase = await createClient();
        const { data: tags } = await supabase
            .from('tags')
            .select('id, tagName')
            .order('tagName');
        return tags as Tag[];
    }

    const tags: { id: number, tagName: string }[] = await fetchTags();


    return (
        <header className="flex items-center py-4 border-b border-b-(--border) font-mono">

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
                <div className={"left-nav flex flex-row items-center gap-3 select-none"}>

                    <NavButton title={"feed"} url={"/"}/>
                    <NavButton title={"expanded"} url={"/expanded"}/>
                    <NavButton title={"loading"} url={"/loading"}/>

                </div>

                <div className={"right-nav flex flex-row items-center gap-4 ml-auto"}>

                    <FilterButton   // here I'm passing tags to client component
                        tags={tags}
                    />
                    <RefreshButton />
                    <ThemeSwitchButton />
                </div>

            </nav>

        </header>
    );
}
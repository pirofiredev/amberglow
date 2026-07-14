"use client"

import { usePathname } from "next/navigation";
import Link from 'next/link';

export default function NavButton({title, url}: {title: string, url: string}) {

    const currentPathname = usePathname();

    if(currentPathname === url) {
        return (
            <div className={"px-2 bg-(--primary) text-(--foreground) rounded-sm"}>
                <p>{title}</p>
            </div>
        );
    }
    else {
        return (
                <Link href={url}>
                    <div className={"px-2  text-(--muted-foreground) hover:text-(--foreground) transition duration-100 rounded-sm"}>
                        <p>{title}</p>
                    </div>
                </Link>
        );
    }


}
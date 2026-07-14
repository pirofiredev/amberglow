'use client'
import {useTransition} from "react";
import { useRouter } from 'next/navigation'
import revTag from "@/server/functions/revalidateTag";


export default function RefreshButton() {
    const router = useRouter();
    const [updating, changeUpdating] = useTransition(); // I've used startTransition here to make animation stop when nextJS fully fetched everything, because router.refresh doesn't return when he refreshed route.

    async function refreshPosts() {
        changeUpdating(() => {
            router.refresh();
        })
        await revTag("posts"); // clean up cache
        await revTag("filterTags"); // clean up cache
    }

    return (
        <svg onClick={refreshPosts} className={`${updating ? "animate-spin" : ""} text-(--muted-foreground) hover:text-(--primary) transition cursor-pointer`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M8 2a6 6 0 0 0-5.324 8.769l-.887.462a7 7 0 0 1 10.52-8.749l.652.51L9 4.774v-2.69A6 6 0 0 0 8 2m5.383 3.346a6 6 0 0 0-.393-.679l.831-.556q.255.38.458.792A7 7 0 0 1 3.606 13.45l-.703-.567L7.5 11.3v2.68q.248.02.5.02a6 6 0 0 0 5.383-8.654" clipRule="evenodd"></path></svg>
    );
}
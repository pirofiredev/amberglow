"use client"
import FilterTag from "../elements/filterTag"
import {useTagMenuToggle} from "@/store/useTagMenuToggleStore";
import {useState, useEffect, useRef} from "react";
import {useStoreTags} from "@/store/useTagStore";



interface Tag {
    tagId: number;
    tagName: string;
}

export default function tagsMenu({tags}: {tags: Tag[]}) {

    const isOpened = useTagMenuToggle((state) => state.isOpened);
    const toggleMenu = useTagMenuToggle((state) => state.toggleMenu);

    const [localOpened, setLocalOpened] = useState(false);
    const [localAnimation, setLocalAnimation] = useState(false); // to make delay before it actually disappears and overall fade smoothness


    const userTags = useStoreTags((state) => state.tags);
    const clearTags = useStoreTags((state) => state.clearTags);

    const [clearAllVisible, setClearAllVisible] = useState(false);

    useEffect(() => {
        if (isOpened) {
            setLocalOpened(true);

            requestAnimationFrame(() => {   // double request to make sure browser won't mess up fading
                requestAnimationFrame(() => {
                    setLocalAnimation(true);
                });
            });
        } else {
            setLocalAnimation(false);

            const timeout = setTimeout(() => {
                setLocalOpened(false);
            }, 300);

            return () => clearTimeout(timeout);
        }
    }, [isOpened]);


    useEffect(() => {
        if(userTags.length === 0) {
            setClearAllVisible(false);
        }
        else {
            setClearAllVisible(true);
        }
    }, [userTags]);


    const menuRef = useRef<HTMLDivElement>(null); // to silent ts
    useEffect(() => {   //TODO review
        if (!isOpened) return;
        function handleGlobalClick(event: MouseEvent) {
            const userClickPosition = event.target as Node;

            if (!menuRef.current?.contains(userClickPosition)) {
                toggleMenu();
            }
        }
        document.addEventListener("click", handleGlobalClick);
        return () => {
            document.removeEventListener("click", handleGlobalClick);
        };
    }, [isOpened, toggleMenu]);



    return (
        <div id={"filtersList"} ref={menuRef} className={`${localOpened ? "visible" : "hidden"} ${localAnimation ? "opacity-100" : "opacity-0"} transition-all duration-300 bg-(--card) border border-(--border) absolute right-0 w-1/2 top-13 p-3`}>

            {/*<div className={`topFilterSection border-b border-b-(--border) pb-3`}>*/}
            {/*    <p className={"uppercase text-(--muted-foreground) text-[0.8rem] text-center mb-0.5"}>ai filter</p>*/}

            {/*        <button type={"button"} onClick={aiFilterHandler} className={`flex flex-row grow w-max items-center mx-auto gap-2 mt-2 ${aiFilter ? "border-(--chart-3) bg-(--transparent-yellow)" : ""} font-semibold transition text-sm text-(--muted-foreground) bg-(--secondary)  rounded-full px-4 py-0.5 cursor-pointer border border-(--border) hover:border-(--chart-3)`}>*/}

            {/*            <span className={`aiFilterAccepted w-60 px-1 py-0.5 flex flex-row justify-center items-center gap-2 ${aiFilter ? "hidden" : "visible"}`}>*/}
            {/*                <svg className={"text-(--muted-foreground)"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.706 4.313H9.294a4.98 4.98 0 0 0-4.982 4.981v5.412a4.98 4.98 0 0 0 4.982 4.982h5.412a4.98 4.98 0 0 0 4.982-4.982V9.294a4.98 4.98 0 0 0-4.982-4.982Z"></path><path d="M19.606 15.588h1.619a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62m-15.21 7.175h-1.62a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"></path><path strokeLinecap="round" strokeLinejoin="round" d="M2.765 8.413v-4.1m18.46 4.1l-.01-4.1m-12.3 4.45v2.698m6.15-2.698v2.698M9.94 15.588h4.1"></path></g></svg>*/}
            {/*                <p>possible ai visible</p>*/}
            {/*                <svg className={"text-(--muted-foreground)"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.706 4.313H9.294a4.98 4.98 0 0 0-4.982 4.981v5.412a4.98 4.98 0 0 0 4.982 4.982h5.412a4.98 4.98 0 0 0 4.982-4.982V9.294a4.98 4.98 0 0 0-4.982-4.982Z"></path><path d="M19.606 15.588h1.619a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62m-15.21 7.175h-1.62a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"></path><path strokeLinecap="round" strokeLinejoin="round" d="M2.765 8.413v-4.1m18.46 4.1l-.01-4.1m-12.3 4.45v2.698m6.15-2.698v2.698M9.94 15.588h4.1"></path></g></svg>*/}
            {/*            </span>*/}

            {/*            <span className={`aiFilterRejected w-60 px-1 py-0.5 flex flex-row justify-center  items-center gap-2 ${aiFilter ? "visible" : "hidden"}`}>*/}
            {/*                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 8.1L9 18l-4.95-4.95l.71-.71L9 16.59l9.19-9.2z"></path></svg>*/}
            {/*                <p>ai stories hidden</p>*/}
            {/*                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 8.1L9 18l-4.95-4.95l.71-.71L9 16.59l9.19-9.2z"></path></svg>*/}
            {/*            </span>*/}

            {/*        </button>*/}
            {/*</div>*/}


            <div className={`bottomFilterSection`}>

                <span className={"flex flex-row items-center justify-between border-b border-b-(--border) pb-1"}>
                    <p className={"uppercase text-(--muted-foreground) text-lg font-mono"}>featured tags</p>
                    <button type={"button"} onClick={clearTags} className={`${clearAllVisible ? "visible" : "hidden"} cursor-pointer text-(--primary)`}>clear all</button>
                </span>

                <div className={"tags flex flex-wrap flex-row gap-1 mt-2.5"}>
                    {tags.map((tag) => (
                        <FilterTag
                            tag={tag}
                            key={tag.tagId}
                        />
                    ))
                    }
                </div>

            </div>

        </div>
    );
}
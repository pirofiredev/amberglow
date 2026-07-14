'use client'
import {useEffect, useState} from "react";
import { useStoreTags } from "@/store/useTagStore";
import TagsMenu from "@/components/client/templates/tagsMenu";
import {useTagMenuToggle} from "@/store/useTagMenuToggleStore";

interface Tag {
    id: number;
    tagName: string;
}

export default function FilterButton({tags}: { tags: Tag[] }) {

    const toggleMenu = useTagMenuToggle((state) => state.toggleMenu);

    const [localOpen, setLocalOpen] = useState(false);

    // const closeMenu = useTagMenuToggle((state) => state.closeMenu);

    // const [aiFilter, setAiFilter] = useState(false);

    // const [filterVisible, setFilterVisible] = useState(false);
    // const [filterAnimation, setFilterAnimation] = useState(false); // true - opacity 100, false - opacity 0
    //

    //
    //
    // function toggleFilterList() {
    //
    //     if(filterVisible) {
    //         setFilterAnimation(false);
    //         setTimeout(()=>{
    //             setFilterVisible(false)
    //         }, 300)
    //     }
    //     else {
    //         setFilterVisible(true);
    //         requestAnimationFrame(() => {   // without it, animation cuts off at beginning
    //             setFilterAnimation(true);
    //         });
    //     }
    // }


    function toggleFilterList() {
        toggleMenu();
        setLocalOpen(!localOpen);
    }


    // function aiFilterHandler() {
    //     setAiFilter(!aiFilter);
    // }

    // function clearFilters() {
    //     clearTags();
    // }

    // useEffect(() => { // autoclose if user clicked somewhere but not on menu
    //     if (!filterVisible) return;
    //
    //     function handleClick(clickEvent: MouseEvent) {
    //         if (!(clickEvent.target as HTMLElement).closest("#filtersList")) {
    //             setFilterAnimation(false);
    //             setTimeout(() => setFilterVisible(false), 300);
    //         }
    //     }
    //
    //     document.body.addEventListener("click", handleClick);
    //
    //     return () => {
    //         document.body.removeEventListener("click", handleClick);
    //     };
    // }, [filterVisible]);

    //
    // ${filterAnimation ? "bg-(--transparent-primary) border-(--primary) text-(--primary) hover:text-(--primary)" : ""}
    return (
        <>
            <button type={"button"} onClick={toggleFilterList} className={`filterButton ${localOpen ? "bg-(--transparent-primary) border-(--primary) text-(--primary) hover:text-(--primary)" : ""} flex flex-row items-center w-25 justify-center gap-1 border border-(--border) rounded-lg p-1 text-(--muted-foreground) hover:border-(--primary) hover:text-(--foreground) transition duration-300 cursor-pointer`}>
                <svg className={"cursor-pointer"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M14.037 20.937a1 1 0 0 1-.518-.145l-3.334-2a2.55 2.55 0 0 1-1.233-2.176v-4.525a1.53 1.53 0 0 0-.284-.891L4.013 4.658a1.01 1.01 0 0 1 .822-1.6h14.33a1.009 1.009 0 0 1 .822 1.6L15.332 11.2a1.53 1.53 0 0 0-.285.891v7.834a1.013 1.013 0 0 1-1.01 1.012M4.835 4.063l4.647 6.557a2.5 2.5 0 0 1 .47 1.471v4.524a1.54 1.54 0 0 0 .747 1.318l3.334 2l.014-7.843a2.5 2.5 0 0 1 .471-1.471l4.654-6.542Z"></path></svg>
                <input className={"text-[0.8rem] cursor-pointer"} type="button" value="filter" />
            </button>

            <TagsMenu
                tags={tags}
            />
        </>

    );
}
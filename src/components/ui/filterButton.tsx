'use client'
import {useEffect, useState} from "react";

interface Tag {
    id: number;
    tagName: string;
}

export default function FilterButton({ tags }: { tags: Tag[] }) {

    const [aiFilter, setAiFilter] = useState(false);

    const [filterVisible, setFilterVisible] = useState(false);
    const [filterAnimation, setFilterAnimation] = useState(false); // true - opacity 100, false - opacity 0

    const [activeTagsIds, setActiveTagsIds] = useState<string[]>([]);

    function toggleFilterList() {

        if(filterVisible) {
            setFilterAnimation(false);
            setTimeout(()=>{
                setFilterVisible(false)
            }, 300)
        }
        else {
            setFilterVisible(true);
            requestAnimationFrame(() => {   // without it, animation cuts off at beginning
                setFilterAnimation(true);
            });
        }
    }

    function aiFilterHandler() {
        setAiFilter(!aiFilter);
    }

    function tagsHandler(tagId:string) {
        setActiveTagsIds(prev =>
            prev.includes(tagId) ? prev.filter(id => id !== tagId) : [...prev, tagId]  // this line means - if an array already includes
        )                                                                                     // id, then rebuild whole array and remove passed id. Else if includes, return all previous values + new passed id
    }

    function clearFilters() {
        setActiveTagsIds([]);
    }

    useEffect(() => { // autoclose if user clicked somewhere but not on menu
        if (!filterVisible) return;

        function handleClick(clickEvent: MouseEvent) {
            if (!(clickEvent.target as HTMLElement).closest("#filtersList")) {
                setFilterAnimation(false);
                setTimeout(() => setFilterVisible(false), 300);
            }
        }

        document.body.addEventListener("click", handleClick);

        return () => {
            document.body.removeEventListener("click", handleClick);
        };
    }, [filterVisible]);


    return (
            <div className="filterbtn-wrapper relative">

                <button type={"button"} onClick={toggleFilterList} className={`filterButton ${filterAnimation ? "bg-(--transparent-primary) border-(--primary) text-(--primary) hover:text-(--primary)" : ""} flex flex-row items-center w-25 justify-center gap-1 border border-(--border) rounded-lg p-1 text-(--muted-foreground) hover:border-(--primary) hover:text-(--foreground) transition duration-300 cursor-pointer`}>
                    <svg className={"cursor-pointer"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M14.037 20.937a1 1 0 0 1-.518-.145l-3.334-2a2.55 2.55 0 0 1-1.233-2.176v-4.525a1.53 1.53 0 0 0-.284-.891L4.013 4.658a1.01 1.01 0 0 1 .822-1.6h14.33a1.009 1.009 0 0 1 .822 1.6L15.332 11.2a1.53 1.53 0 0 0-.285.891v7.834a1.013 1.013 0 0 1-1.01 1.012M4.835 4.063l4.647 6.557a2.5 2.5 0 0 1 .47 1.471v4.524a1.54 1.54 0 0 0 .747 1.318l3.334 2l.014-7.843a2.5 2.5 0 0 1 .471-1.471l4.654-6.542Z"></path></svg>
                    <input className={"text-[0.8rem] cursor-pointer"} type="button" value="filter" />
                </button>

                <div id={"filtersList"} className={`${filterAnimation ? "opacity-100" : "opacity-0"} ${filterVisible ? "visible" : "hidden"} transition-all duration-300 bg-(--card) border border-(--border) absolute right-0 mt-1 rounded-sm p-3`}>

                    <div className={`topFilterSection border-b border-b-(--border) pb-3`}>
                        <p className={"uppercase text-(--muted-foreground) text-[0.8rem] text-center mb-0.5"}>ai filter</p>

                            <button type={"button"} onClick={aiFilterHandler} className={`flex flex-row grow w-max items-center mx-auto gap-2 mt-2 ${aiFilter ? "border-(--chart-3) bg-(--transparent-yellow)" : ""} font-semibold transition text-sm text-(--muted-foreground) bg-(--secondary)  rounded-full px-4 py-0.5 cursor-pointer border border-(--border) hover:border-(--chart-3)`}>

                                <span className={`aiFilterAccepted w-60 px-1 py-0.5 flex flex-row justify-center items-center gap-2 ${aiFilter ? "hidden" : "visible"}`}>
                                    <svg className={"text-(--muted-foreground)"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.706 4.313H9.294a4.98 4.98 0 0 0-4.982 4.981v5.412a4.98 4.98 0 0 0 4.982 4.982h5.412a4.98 4.98 0 0 0 4.982-4.982V9.294a4.98 4.98 0 0 0-4.982-4.982Z"></path><path d="M19.606 15.588h1.619a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62m-15.21 7.175h-1.62a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"></path><path strokeLinecap="round" strokeLinejoin="round" d="M2.765 8.413v-4.1m18.46 4.1l-.01-4.1m-12.3 4.45v2.698m6.15-2.698v2.698M9.94 15.588h4.1"></path></g></svg>
                                    <p>possible ai visible</p>
                                    <svg className={"text-(--muted-foreground)"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.706 4.313H9.294a4.98 4.98 0 0 0-4.982 4.981v5.412a4.98 4.98 0 0 0 4.982 4.982h5.412a4.98 4.98 0 0 0 4.982-4.982V9.294a4.98 4.98 0 0 0-4.982-4.982Z"></path><path d="M19.606 15.588h1.619a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62m-15.21 7.175h-1.62a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"></path><path strokeLinecap="round" strokeLinejoin="round" d="M2.765 8.413v-4.1m18.46 4.1l-.01-4.1m-12.3 4.45v2.698m6.15-2.698v2.698M9.94 15.588h4.1"></path></g></svg>
                                </span>

                                <span className={`aiFilterRejected w-60 px-1 py-0.5 flex flex-row justify-center  items-center gap-2 ${aiFilter ? "visible" : "hidden"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 8.1L9 18l-4.95-4.95l.71-.71L9 16.59l9.19-9.2z"></path></svg>
                                    <p>ai stories hidden</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 8.1L9 18l-4.95-4.95l.71-.71L9 16.59l9.19-9.2z"></path></svg>
                                </span>

                            </button>
                    </div>


                    <div className={`bottomFilterSection mt-3`}>

                        <span className={"flex flex-row justify-between items-center"}>
                            <p className={"uppercase text-(--muted-foreground) text-[0.9rem] text-left mb-0.5"}>FEATURED TAGS</p>
                            <button type={"button"} onClick={clearFilters} className={`cursor-pointer text-(--primary) ${activeTagsIds.length ? "block" : "hidden"}`}>clear all</button>
                        </span>

                        <div className={"tags flex flex-wrap flex-row gap-1 mt-2"}>

                            {tags.map((tag) => (
                                <button
                                    key={tag.id}
                                    id={tag.id.toString()}
                                    type="button"
                                    onClick={() => tagsHandler(tag.id.toString())}
                                    className={`cursor-pointer ${activeTagsIds.includes( tag.id.toString() ) ? "bg-(--semi-ransparent-primary) text-(--foreground) border-(--primary)" : "bg-(--sidebar-accent) text-(--muted-foreground) hover:text-(--foreground) hover:border-(--primary)"}  transition px-2 py-0.5 text-[0.9rem] rounded-full border border-(--border)`}
                                >
                                    <p>{tag.tagName}</p>
                                </button>
                            ))
                            }

                        </div>

                    </div>

                </div>

            </div>
    );
}
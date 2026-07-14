"use client"

import {useEffect, useState} from "react";
import { useStoreTags } from "@/store/useTagStore";

interface tagInterface {
    id: number
    tagName: string
}

export default function filterTag({tag}: {tag: tagInterface}) {

    const [tagSelected, setTagSelected] = useState(false);

    // review
    const tags = useStoreTags((state) => state.tags);
    const addTag = useStoreTags((state) => state.addTag);
    const removeTag = useStoreTags((state) => state.removeTag);


    function tagsHandler() {
        if(!tagSelected) {
            addTag( {tagName: tag.tagName} );
            setTagSelected(true);
        }
        else {
            removeTag(tag.tagName);
            setTagSelected(false);
        }
    }

    // review
    useEffect(() => {
        const tagStillExists = tags.some((storeTag) => storeTag.tagName === tag.tagName);

        if (!tagStillExists) {
            setTagSelected(false);
        }
    }, [tags, tag.tagName]);

    return (
        <button
            key={tag.id}
            id={tag.id.toString()}
            type="button"
            onClick={tagsHandler}
            className={`cursor-pointer ${tagSelected ? "bg-(--semi-ransparent-primary) text-(--foreground) border-(--primary)" : "bg-(--sidebar-accent) text-(--muted-foreground) hover:text-(--foreground) hover:border-(--primary)"}  transition px-2 py-0.5 text-[0.9rem] rounded-full border border-(--border)`}
        >
            <p>{tag.tagName}</p>
        </button>
    );
}
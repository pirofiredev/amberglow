'use client'

export default function navButtonInactive({title}: {title: string}) {
    return (
        <input type="button" value={title} className={"text-(--muted-foreground) text-[0.8rem] hover:text-(--popover-foreground) transition cursor-pointer"}/>
    );
}
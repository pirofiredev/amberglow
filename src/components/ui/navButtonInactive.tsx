'use client'

export default function navButtonInactive({url, title}: {title: string, url: string}) {
    return (
        <a href={url} className={"text-(--muted-foreground) text-[0.8rem] hover:text-(--popover-foreground) transition cursor-pointer"}>{title}</a>
    );
}
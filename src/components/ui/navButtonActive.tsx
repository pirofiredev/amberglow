'use client'

export default function navButtonActive({title}: {title: string}) {
    return (
        <p className={`bg-(--primary) text-(--foreground) rounded-sm text-[0.8rem] py-0.5 px-5`}>{title}</p>
    );
}
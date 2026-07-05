'use client'

export default function navButtonActive({title}: {title: string}) {
    return (
        <input type="button" value={title} className={`bg-(--primary) text-(--foreground) rounded-sm text-[0.8rem] py-0.5 px-5`}/>
    );
}
'use client'

export default function navButtonActive({title, width, height}: {title: string, width: number, height: number}) {
    return (
        <input type="button" style={{width, height}} value={title} className={`bg-(--primary) text-(--foreground) rounded-sm text-[0.8rem]`}/>
    );
}
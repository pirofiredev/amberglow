'use client'

interface TagProps {
    tagId: number
    tagName: string
}

export default function FeedTag({tagId, tagName}: TagProps) {
    return (
        <button
            id={tagId.toString()}
            type="button"
            className={`bg-(--sidebar-accent) text-(--muted-foreground) transition px-2 py-0.5 text-[0.8rem] rounded-full border border-(--border)`}
        >
            <p>{tagName}</p>
        </button>
    );
}
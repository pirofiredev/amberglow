"use client"

import ExpandedComment from "./expandedComment"

export default function ExpandedComments() {
    return (
        <>
            <div className={"commentsCount flex flex-row gap-1 text-(--muted-foreground) text-sm mb-3 items-center"}>
                <p className={"text-(--primary)"}>123</p>
                <p className={"font-mono"}>comments</p>
            </div>

            <ExpandedComment />
        </>

    );
}
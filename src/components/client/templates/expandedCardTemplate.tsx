'use client'
import ExpandedTag from './expandedTag'
import ExpandedComments from './expandedComments'
import {useState} from "react";

interface expandedPostInterface {
    id: number;
    by: string;
    time: number;
    type?: "story" | "comment" | "job" | "poll" | "poll-opt";
    title?: string;
    url: string;
    text?: string;
    score?: number;
    descendants?: number;
    kids?: number[];
    parent?: number;
    poll?: number;
    parts?: number[];
    deleted?: boolean;
    dead?: boolean;
    description?: string;
    karma?: number;
}

export default function expandedCardTemplate({expandedPostData}: {expandedPostData: expandedPostInterface}) {

    const [copied, setCopied] = useState(false);

    function copyToClipboard() {

        if(!copied) {
            console.log("copied!");
            setCopied(true);
        }

        setTimeout(() => {
            setCopied(false);
        }, 2000)

    }

    const shortenedUrl = expandedPostData.url ? new URL(expandedPostData.url).hostname : null;

    return (
        <>
            <div className={"flex flex-row gap-1 text-(--muted-foreground) text-sm mt-7 font-mono"}>
                <p className={"text-(--primary)"}>{shortenedUrl}</p>
                <p>/</p>
                <p>123 pts</p>
                <p>/</p>
                <p>12h ago</p>
            </div>

            <p className={"truncate text-(--foreground) text-lg mt-1.5 max-w-8/10"}>{expandedPostData.title}</p>

            <div className={"expandedTagContainer mt-2 flex flex-row gap-3"}>

                <ExpandedTag
                    tagId={1}
                    tagName={"React"}
                />

                <ExpandedTag
                    tagId={2}
                    tagName={"NextJS"}
                />

                <ExpandedTag
                    tagId={3}
                    tagName={"Tailwind CSS"}
                />

            </div>

            <div className={"expandedDescription mt-2"}>
                <p className={"text-(--foreground) bg-(--card) border-(--border) border p-3 rounded-lg text-sm mt-1.5 line-clamp-3"}>{expandedPostData.description}</p>
            </div>

            <div className={"expandedButtons flex flex-row gap-5 mt-3.5 items-center"}>

                <a href={expandedPostData.url} target={"_blank"} className={"externalUrl flex flex-row gap-1 items-center select-none hover:[&_p]:font-bold transition duration-300 text-(--foreground) text-sm bg-(--primary) px-4 py-1.5 rounded-lg a:hover:font-bold"} rel="noopener">
                    <p>visit article</p>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 4.5h-7V6h4.44l-5.97 5.97l1.06 1.06L18 7.06v4.44h1.5zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5z"></path></svg>
                </a>

                <button onClick={copyToClipboard} className={"toClipboard flex flex-row items-center justify-center gap-1 relative cursor-pointer text-(--muted-foreground) text-sm border-(--border border w-30 px-2 py-1.5 rounded-lg hover:border-(--primary) hover:text-(--foreground) transition"} type="button">
                    <svg className={"absolute left-3"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><path d="m12 17l-1.5 1.5a3.536 3.536 0 0 1-5 0v0a3.536 3.536 0 0 1 0-5l3-3a3.536 3.536 0 0 1 5 0v0"></path><path d="m12 7l1.5-1.5a3.536 3.536 0 0 1 5 0v0a3.536 3.536 0 0 1 0 5l-3 3a3.536 3.536 0 0 1-5 0v0"></path></g></svg>
                    <p>{copied ? "copied" : "copy URL"}</p>
                </button>

            </div>

            <div className={"border-b border-(--border) mt-5 mb-3.5"}></div>

            <ExpandedComments/>
        </>
    );
}
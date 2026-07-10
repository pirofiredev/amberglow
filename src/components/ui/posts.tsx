"use server"
import FeedTag from "../ui/feedTag"
import fetchPosts from "@/lib/shared/fetchPosts";
import getPostPublishTimeAgo from "@/components/functions/getPostPublishTimeAgo";
import { cacheLife } from 'next/cache'


export default async function Posts() {
    'use cache'
    cacheLife('hours')

    let fetchFrom = 1
    let fetchTo = 10


    const postData = await fetchPosts({
        filters: [],
        fetchFrom: fetchFrom,
        fetchTo: fetchTo,
    });


    return (
        <>
            {postData.map((post) => (
                <div key={post.id} className={"post-wrapper flex flex-row gap-4 mt-5 p-2 rounded-sm border-b border-(--border) pb-5 hover:bg-(--muted) transition duration-100 cursor-pointer"}>

                    <div className="post-rating flex flex-col items-center">
                        <svg className={"text-(--muted-foreground) hover:text-(--primary) transition duration-100 cursor-pointer"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="m5.84 15.41l5.66-5.66l5.66 5.66l-.71.7l-4.95-4.95l-4.95 4.95z"></path></svg>
                        <p className={"rating text-(--primary) text-center font-mono text-sm"}>{post.score ?? "?"}</p>
                        <svg className={"text-(--muted-foreground) hover:text-(--destructive) transition duration-100 cursor-pointer"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="m5.84 9.59l5.66 5.66l5.66-5.66l-.71-.7l-4.95 4.95l-4.95-4.95z"></path></svg>
                    </div>



                    <div className="post-content flex flex-col">

                    <span className={"flex flex-row gap-1 text-(--muted-foreground) mt-2 text-sm font-mono items-center"}>
                        <p>{post.by ?? "?"}</p>
                        <p>|</p>
                        <p className="text-(--primary)">{post.url ? new URL(post.url).hostname : null}</p>
                        <p>|</p>
                        <p>{getPostPublishTimeAgo(post.time ?? "?")}</p>

                        {/*<div className={"aiMark px-1.5 py-0.5 ml-2 text-[0.7rem] bg-(--transparent-yellow) rounded-sm text-(--chart-3) border-(--chart-3) border"}>*/}
                        {/*    <p>AI</p>*/}
                        {/*</div>*/}
                    </span>

                        <p className={"text-lg text-(--foreground) mt-1"}>{post.title ?? "?"}</p>

                        <span className={"tags-container flex flex-row gap-2 mt-2"}>
                            <FeedTag                        /* TODO Add later click functionality for quick tagging */
                                tagId={12}
                                tagName={"tag"}
                            />
                            <FeedTag
                                tagId={13}
                                tagName={"list"}
                            />
                            <FeedTag
                                tagId={14}
                                tagName={"example"}
                            />
                        </span>


                        <span className={"font-mono mt-3 text-sm flex flex-row gap-2 text-(--muted-foreground)"}>
                        <span className={"flex flex-row gap-2"}>
                            <p className={"text-(--primary)"}>{post.karma ?? "?"}</p>
                            <p>upvotes</p>
                            <p>·</p>
                        </span>

                        <p>{post.kids?.length ?? "?"} comments ·</p>
                        <p className={"hover:text-(--foreground) cursor-pointer transition duration-100"}>expand</p>
                    </span>


                    </div>

                </div>
            ))}
        </>

    );
}
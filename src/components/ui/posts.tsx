"use server"
import FeedTag from "../ui/feedTag"
import fetchPosts from "@/lib/shared/fetchPosts";


export default async function Posts() {

    const postData = await fetchPosts({
        filters: [""],
        fetchFrom: 1,
        fetchTo: 10,
    });

    console.log(postData);

    return (
            <div className={"post-wrapper flex flex-row gap-4 mt-5 border-b border-(--border) pb-5"}>

                <div className="post-rating flex flex-col items-center">
                    <svg className={"text-(--muted-foreground) hover:text-(--primary) transition duration-100 cursor-pointer"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m5.84 15.41l5.66-5.66l5.66 5.66l-.71.7l-4.95-4.95l-4.95 4.95z"></path></svg>
                    <p className={"rating text-(--primary) font-mono text-sm w-7"}>123</p>
                    <svg className={"text-(--muted-foreground) hover:text-(--destructive) transition duration-100 cursor-pointer"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m5.84 9.59l5.66 5.66l5.66-5.66l-.71-.7l-4.95 4.95l-4.95-4.95z"></path></svg>
                </div>



                <div className="post-content flex flex-col">

                    <span className={"flex flex-row gap-1 text-(--muted-foreground) mt-2 text-sm font-mono items-center"}>
                        <p>01.</p>
                        <p>|</p>
                        <p className={"text-(--primary)"}>github.com</p>
                        <p>|</p>
                        <p>12h ago</p>

                        <div className={"aiMark px-1.5 py-0.5 ml-2 text-[0.7rem] bg-(--transparent-yellow) rounded-sm text-(--chart-3) border-(--chart-3) border"}>
                            <p>AI</p>
                        </div>
                    </span>

                    <p className={"text-lg text-(--foreground) mt-1"}>Lorem ipsum is a dummy or placeholder text</p>

                    <p className={"text-(--muted-foreground) mt-0.5"}>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.</p>

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
                            <p className={"text-(--primary)"}>123</p>
                            <p>pts</p>
                            <p>·</p>
                        </span>

                        <p>331 comments ·</p>
                        <p className={"hover:text-(--foreground) cursor-pointer transition duration-100"}>expand</p>
                    </span>


                </div>

            </div>
    );
}
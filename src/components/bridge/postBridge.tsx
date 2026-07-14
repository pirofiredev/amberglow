"use server"
import fetchPosts from "../../server/functions/fetchPosts";
import SinglePost from "../client/templates/singlePostTemplate";
import { cacheLife, cacheTag } from 'next/cache'


export default async function PostMiddle() {
    'use cache'
    cacheLife('minutes')
    cacheTag("posts")

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
                <SinglePost key={post.id}
                    post={post}
                />
            ))}
        </>
    );
}
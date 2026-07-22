import getMostPopularPostIds from "@/server/functions/getMostPopularPostIds";

// @ts-expect-error it's server-side logic that doesn't touch client
import {supabaseAdmin} from "../lib/supabase/server.ts";
import fetchSingleItem from "@/server/functions/fetchSingleItem";
import extractTagsFromText from "@/server/content-cron/tagExtractor";

interface Post {
    postId: number;
    postTag: string;
}


export default async function updatePostsInDb() {

    async function getPostsFromDb() {
        const supabase = supabaseAdmin;

        const { data: posts, error } = await supabase
            .from("postsList")
            .select("*");

        if (error) {
            throw error;
        }

        return posts as Post[];
    }

    return await getPostsFromDb();
}

async function main() {
    const res = await updatePostsInDb();

    console.log("Posts from DB:");
    if (res.length === 0) { // no posts in DB
        console.log("No posts in DB");

        const popularPostsIdList:Array<number> = await getMostPopularPostIds();

        for(const singlePost of popularPostsIdList) {
            const singlePostData = await fetchSingleItem(singlePost);
            const tags = await extractTagsFromText(singlePostData.title ?? singlePostData.text ?? ["no tags"]);

            for(const tag of tags) {

                const supabase = supabaseAdmin;
                const { data, error } = await supabase
                    .from("postsList")
                    .insert({
                        postId: singlePostData.id,
                        postTag: tag
                    })
                    .select();
            }
        }
        console.log("Created successfully :)");
        process.exit(1);
    }
    else { // there are posts in DB
        console.log(res);
        const popularPostsIdList:Array<number> = await getMostPopularPostIds();

        // part that removes posts that are no longer popular / old

        const supabase = supabaseAdmin;
        const { data, error } = await supabaseAdmin // removes post if it doesn't match ID
            .from("postsList")
            .delete()
            .not("postId", "in", `(${popularPostsIdList.join(",")})`);

        // last part that adds fresh posts avoiding duplicates

        for (const singlePost of popularPostsIdList) {
            const singlePostData = await fetchSingleItem(singlePost);
            const tags = await extractTagsFromText(singlePostData.title ?? singlePostData.text ?? "no tags");

            for (const tag of tags) {
                const supabase = supabaseAdmin;

                const { data, error } = await supabase
                    .from("postsList")
                    .upsert(
                        {
                            postId: singlePostData.id,
                            postTag: tag,
                        },
                        {
                            onConflict: "postId,postTag",
                            ignoreDuplicates: true,
                        },
                    )
                    .select();

                console.log("Inserted or skipped:", data);
            }
        }
        console.log("Updated successfully :)");
        process.exit(1);


    }
}

main();
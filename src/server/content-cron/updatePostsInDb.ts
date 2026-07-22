import { createPublicClient } from "../lib/supabase/public";


export default async function updatePostsInDb() {

    const mostPopularPostsUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";


    // returns id's of most popular posts
    async function mostPopularPostsIds(fetchFrom:number, fetchTo:number) {

        const mostPopularPostsResponse = await fetch(mostPopularPostsUrl);
        const mostPopularPostsList: number[] = await mostPopularPostsResponse.json();

        // biome-ignore lint/style/useConst: <array.push at 25 line bruh>
        let tempPostsList: Array<number> = [];

        // return mostPopularPostsList;
        for(let i= fetchFrom; i<=fetchTo; i++) {
            tempPostsList.push(mostPopularPostsList[i]);
        }
        return tempPostsList;
    }

}
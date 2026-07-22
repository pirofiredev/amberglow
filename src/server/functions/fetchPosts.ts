import getUserPts from "../../server/functions/getUserPts";
import getMostPopularPostIds from "@/server/functions/getMostPopularPostIds";

interface FetchPost {
    filters: Array<string>;
    fetchFrom: number;
    fetchTo: number;
}

interface post {
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


export default async function fetchPosts({ filters, fetchFrom, fetchTo }: FetchPost): Promise<post[]> {


    function specificItemUrl(itemId: number) {
        return `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;
    }

    function extractPopularPosts(mostPopularPostsIds: Array<number>, postsFrom: number, postTo: number) {
        const tempPostsList: Array<number> = [];
        for(let i= fetchFrom; i<=fetchTo; i++) {
            tempPostsList.push(mostPopularPostsIds[i]);
        }
        return tempPostsList;
    }


    // User didn't apply any filters
    if(filters.length === 0) {
        // biome-ignore lint/style/useConst: <as on 25 line biome doesn't see arr.push>
        let postsData = [];

        const popularPostsIdList:Array<number> = await getMostPopularPostIds();

        const specificListOfPosts = extractPopularPosts(popularPostsIdList, fetchFrom, fetchTo);

        for (const post of specificListOfPosts) {
            const popularPostResponse = await fetch(specificItemUrl(post));
            const popularPostsData = await popularPostResponse.json();

            popularPostsData.karma = await getUserPts(popularPostsData.by);

            postsData.push(popularPostsData);
        }
        return postsData;
    }

    else {
        return [];
    }
}
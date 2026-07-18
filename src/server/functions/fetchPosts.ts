import getUserPts from "../../server/functions/getUserPts";

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

    const mostPopularPostsUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";

    function specificItemUrl(itemId: number) {
        return `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;
    }

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


    // User didn't apply any filters
    if(filters.length === 0) {
        // biome-ignore lint/style/useConst: <as on 25 line biome doesn't see arr.push>
        let postsData = [];

        const popularPostsIdList:Array<number> = await mostPopularPostsIds(fetchFrom, fetchTo);

        for (const post of popularPostsIdList) {
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
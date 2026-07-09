interface FetchPost {
    filters: Array<string>;
    fetchFrom: number;
    fetchTo: number;
}


export default async function fetchPosts({ filters, fetchFrom, fetchTo }: FetchPost) {

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
            postsData.push(popularPostsData);
        }
        return postsData;
    }


    else {
        console.log("soon");
    }
}
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


export default async function fetchSinglePost(postId: number): Promise<post[]> {

    function specificItemUrl(itemId: number) {
        return `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;
    }
    const singlePostResponse = await fetch(specificItemUrl(postId));
    return await singlePostResponse.json();
}
export default async function getMostPopularPostIds() {
    const mostPopularPostsUrl = "https://hacker-news.firebaseio.com/v0/topstories.json"; //TODO Could be merged into single function / helper on server, bc used not once

    const mostPopularPostsResponse = await fetch(mostPopularPostsUrl);
    const mostPopularPosts: number[] = await mostPopularPostsResponse.json();

    return mostPopularPosts;
}

export default async function getUserPts(username:string): number {
    const resolve = await fetch(`https://hacker-news.firebaseio.com/v0/user/${username}.json`);
    const result = await resolve.json();
    return result.karma;
}
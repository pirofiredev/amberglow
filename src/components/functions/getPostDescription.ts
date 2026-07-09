export default async function getPostDescription(url: string): Promise<string> {
    const jinaUrl = "https://r.jina.ai/";

    const jinaRawResult = await fetch(jinaUrl + "/" + url, {
        headers: { Accept: "application/json", Authorization: `Bearer ${process.env.JINA_AI_API_KEY}` },
    });

    const jinaResult = await jinaRawResult.json();

    return jinaResult.data.description;
}
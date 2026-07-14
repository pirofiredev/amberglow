import ExpandedCardTemplate from "@/components/client/templates/expandedCardTemplate";
import fetchSinglePost from "@/server/functions/fetchSinglePost";
import getPostDescription from "@/server/functions/getPostDescription";


export default async function expandedCardMiddle({postId}: {postId: number}) {

    let expandedPostData = await fetchSinglePost(postId);
    expandedPostData.description = await getPostDescription(expandedPostData.url);


    return (
        <ExpandedCardTemplate
            expandedPostData={expandedPostData}
        />
    );
}
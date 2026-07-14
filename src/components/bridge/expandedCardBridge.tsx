import ExpandedCardTemplate from "@/components/client/templates/expandedCardTemplate";
import fetchSingleItem from "@/server/functions/fetchSingleItem";
import getPostDescription from "@/server/functions/getPostDescription";
import ExpandedCommentBridge from "./expandedCommentBridge";


export default async function expandedCardMiddle({postId}: {postId: number}) {

    let expandedPostData = await fetchSingleItem(postId);
    // expandedPostData.description = await getPostDescription(expandedPostData.url);

    if(expandedPostData.kids?.length !== 0) { // if there are comments
        return (
            <>
                <ExpandedCardTemplate
                    expandedPostData={expandedPostData}
                />
                <ExpandedCommentBridge
                    postComments={expandedPostData.kids ?? []}
                />
            </>
        );
    }
    else {  // no comments
        return (
            <ExpandedCardTemplate
                expandedPostData={expandedPostData}
            />
        );
    }

}
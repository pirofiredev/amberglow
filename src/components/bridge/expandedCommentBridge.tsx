import ExpandedComment from "../client/elements/expandedComment"
import fetchSingleItem from "@/server/functions/fetchSingleItem";
import getUserPts from "@/server/functions/getUserPts";


export default async function ExpandedCommentBridge({postComments}: {postComments: Array<number>}) {

    const postCommentsResult = [];


    for (const commentId of postComments) {
        const expandedComment = await fetchSingleItem(commentId);

        expandedComment.karma = await getUserPts(expandedComment.by);

        postCommentsResult.push(expandedComment);
    }

    return (
        <div className={"comments-container flex flex-col gap-5"}>

            {postCommentsResult.map((postComment) => (
                <ExpandedComment
                    key={postComment.id}
                    // @ts-expect-error this bridge would not be called. I've handled it in expandedCardBridge.tsx already :)
                    commentData={postComment}
                />
            ))}

        </div>
    );
}
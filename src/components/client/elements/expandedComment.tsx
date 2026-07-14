"use client"
import DOMPurify from "isomorphic-dompurify";
import GetPostPublishTimeAgo from "@/components/client/helpers/getPostPublishTimeAgo";
import {Suspense} from "react";

interface commentDataInterface {
    by?: string;
    id?: number;
    parent?: number
    text: string;
    time: number;
    type?: string;
    karma: number;
}

export default function expandedComment({commentData}: {commentData: commentDataInterface}) {

    const cleanCommentText = DOMPurify.sanitize(commentData.text);

    return (
      <div className={"commentsCount flex flex-col gap-1 text-(--muted-foreground) text-sm border-l-3 pl-2  border-(--border)"}>

          <span className={"flex flex-row items-center gap-1"}>
              <p className={"text-(--primary)"}>{commentData.by}</p>
              <p> | </p>

              <p>
                <Suspense fallback={null}>
                    <GetPostPublishTimeAgo
                        unixTime={commentData.time}
                    />
                </Suspense>
              </p>

              <p> | {commentData.karma} upvotes</p>
          </span>

          {/** biome-ignore lint/security/noDangerouslySetInnerHtml: <i have to use here inner. Also, that one constant is cleaned from XSS and other bad stuff> */}
          <div className={"text-(--foreground) text-[0.9rem] mt-0.5 max-h-50 line-clamp-10"} dangerouslySetInnerHTML={{ __html: cleanCommentText }}></div>
          {/* also important thing to put div instead of p to avoid hydration errors */}
      </div>
    );
}
"use client"

export default function expandedComment() {
    return (
      <div className={"commentsCount flex flex-col gap-1 text-(--muted-foreground) text-sm border-l-3 pl-2  border-(--border)"}>

          <span className={"flex flex-row items-center gap-1"}>
              <p className={"text-(--primary)"}>example username</p>
              <p> | 1 minute ago</p>
              <p> | 12 pts</p>
          </span>

          <p className={"text-(--foreground) text-[0.9rem] mt-0.5 max-h-50 line-clamp-10"}>Lorem ipsum is a display font used in web development to fill up some space.</p>

      </div>
    );
}
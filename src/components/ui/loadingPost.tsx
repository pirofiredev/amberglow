"use client"

export default function LoadingPost() {
    return (
        <div className={"loading-posts flex flex-col gap-5 z-0"}>

            <div className={"loading-post flex flex-row gap-5"}>

                <div className={"buttons flex flex-col gap-1 items-center"}>
                    <div className={"w-5 h-5 bg-(--sidebar-accent) animate-pulse rounded-md"}></div>
                    <div className={"w-10 h-3 bg-(--sidebar-accent) animate-pulse rounded-md"}></div>
                    <div className={"w-5 h-5 bg-(--sidebar-accent) animate-pulse rounded-md"}></div>
                </div>

                <div className={"rows flex flex-col gap-2"}>
                    <div className={"row w-70 h-3 bg-(--sidebar-accent) animate-pulse rounded-md"}></div>
                    <div className={"row w-90 h-4 bg-(--sidebar-accent) animate-pulse rounded-md"}></div>
                    <div className={"row w-70 h-3 bg-(--sidebar-accent) animate-pulse rounded-md"}></div>

                </div>

            </div>

            <div className={"border-b-2 border-(--border)"}></div>
        </div>
    );
}
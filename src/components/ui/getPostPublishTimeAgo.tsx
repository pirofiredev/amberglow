"use client";

export default function GetPostPublishTimeAgo({ unixTime }: { unixTime: number }) {
    const diff = Math.floor((Date.now() - unixTime * 1000) / 1000);

    let text: string;

    if (diff < 60) {
        text = `${diff} seconds ago`;
    } else if (diff < 3600) {
        text = `${Math.floor(diff / 60)} minutes ago`;
    } else if (diff < 86400) {
        const hours = Math.floor(diff / 3600);
        text = hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else {
        text = `${Math.floor(diff / 86400)} days ago`;
    }

    return text;
}
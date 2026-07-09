export default function getPostPublishTimeAgo(unixTime: number): string {
    const diff = Math.floor((Date.now() - unixTime * 1000) / 1000);

    if (diff < 60) {
        return `${diff} seconds ago`;
    }

    if (diff < 3600) {
        return `${Math.floor(diff / 60)} minutes ago`;
    }

    if (diff < 86400) {
        const hours = Math.floor(diff / 3600);
        return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    }

    return `${Math.floor(diff / 86400)} days ago`;
}
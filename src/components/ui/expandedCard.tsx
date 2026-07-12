import ExpandedCardTemplate from "../ui/expandedCardTemplate";
// import fetchSinglePost from "@/components/functions/fetchSinglePost";

type Props = {
    params: Promise<{ id: string }>
}

export default async function ExpandedCard({ params }: Props) {
    const { id } = await params;

    // const expandedDataResponse = await fetchSinglePost()

    return (
        <p>{id}</p>
        // <ExpandedCardTemplate
        //     // expandedData={expandedData}
        // />
    );
}
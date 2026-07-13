import Header from "../../../components/bridge/headerBridge";
import ExpandedCard from "../../../components/client/templates/expandedCardTemplate";
import {Suspense} from "react";
import LoadingAnimation from "../../../components/client/templates/layout/loadingAnimation";


type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function Expanded({ params }: PageProps) {
    const { id } = await params;

    console.log(id);

    return (
        <Suspense fallback={<LoadingAnimation/>}>
            <Header />
            <ExpandedCard/>
        </Suspense>
    );
}
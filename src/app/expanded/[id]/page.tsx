import Header from "../../../components/bridge/headerBridge";
import ExpandedCardBridge from "../../../components/bridge/expandedCardBridge";
import { Suspense } from "react";
import LoadingAnimation from "../../../components/client/templates/layout/loadingAnimation";

type PageProps = {
    params: Promise<{ id: string }>;
};

// done trick here by declaring two separate function, because params were interrupting <Suspend> react flow

async function ExpandedContent({ params }: PageProps) {
    const { id } = await params;

    return (
        <>
            <Header />
            <ExpandedCardBridge postId={parseInt(id, 10)} />
        </>
    );
}

export default function Expanded({ params }: PageProps) {
    return (
        <Suspense fallback={<LoadingAnimation />}>
            <ExpandedContent params={params} />
        </Suspense>
    );
}
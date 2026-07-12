import Header from "@/components/layout/header";
import ExpandedCard from "@/components/ui/expandedCard";
import {Suspense} from "react";
import LoadingAnimation from "@/components/ui/loadingAnimation";


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
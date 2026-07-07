'use server'
import Header from "../../components/layout/header";
import ExpandedCard from "@/components/ui/expandedCard";


export default async function Expanded() {
    return (
        <>
            <Header />
            <ExpandedCard />
        </>
    );
}
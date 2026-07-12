"use server"

import HeaderTemplate from "../ui/headerTemplate";
import fetchFilterTags from "@/components/functions/fetchFilterTags";


export default async function Header() {

    const tags = await fetchFilterTags();

    return (
            <HeaderTemplate
                tags={tags}
            />
    );
}
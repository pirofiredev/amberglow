"use server"

import fetchFilterTags from "../../server/functions/fetchFilterTags";
import HeaderTemplate from "../client/templates/layout/headerTemplate";


export default async function HeaderMiddle() {

    const tags = await fetchFilterTags();

    return (
            <HeaderTemplate
                tags={tags}
            />
    );
}
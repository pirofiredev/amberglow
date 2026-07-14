import fetchFilterTags from "../../server/functions/fetchFilterTags";
import FilterButton from "@/components/client/elements/filterButton";

export default async function tagsBridge() {
    const tags = await fetchFilterTags();


    return (
        <FilterButton
            tags={tags}
        />
    );
}
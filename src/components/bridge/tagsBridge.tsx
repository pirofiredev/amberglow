import FilterButton from "@/components/client/elements/filterButton";
import fetchFilterTags from "../../server/functions/fetchFilterTags";

export default async function tagsBridge() {
    const tags = await fetchFilterTags();

    return (
        <FilterButton
            tags={tags}
        />
    );
}
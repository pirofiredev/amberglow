import { createPublicClient } from "../lib/supabase/public";

interface Tag {
    tagId: number;
    tagName: string;
}


export default async function fetchFilterTags() {

    async function fetchTags(): Promise<Tag[]> {
        const supabase = createPublicClient();
        const { data: tags } = await supabase
            .from('tags')
            .select('tagId, tagName')
            .order('tagName');
        return tags as Tag[];
    }

    return await fetchTags();
}
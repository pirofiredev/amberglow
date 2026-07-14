import { createPublicClient } from "../lib/supabase/public";

interface Tag {
    id: number;
    tagName: string;
}


export default async function fetchFilterTags() {

    async function fetchTags(): Promise<Tag[]> {
        const supabase = createPublicClient();
        const { data: tags } = await supabase
            .from('tags')
            .select('id, tagName')
            .order('tagName');
        return tags as Tag[];
    }

    return await fetchTags();
}
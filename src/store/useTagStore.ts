import { create } from "zustand";


// review

interface UserTag {
    tagName: string;
}

interface TagsStore {
    tags: UserTag[];
    addTag: (tag: UserTag) => void;
    removeTag: (tagName: string) => void;
    clearTags: () => void;
}

export const useStoreTags = create<TagsStore>((set) => ({
    tags: [],

    addTag: (tag) =>
        set((state) => ({
            tags: [...state.tags, tag],
        })),

    removeTag: (tagName) =>
        set((state) => ({
            tags: state.tags.filter((tag) => tag.tagName !== tagName),
        })),

    clearTags: () => set({ tags: [] }),
}));
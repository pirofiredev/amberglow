"use server";
import { revalidateTag } from "next/cache";

export default async function revTag(tagName: string) {
    revalidateTag(tagName, "max");
}
import { createClient } from "../lib/supabase/server";
import cron from "node-cron";
import keyword_extractor from "keyword-extractor";

async function syncTags() {

}

syncTags();
cron.schedule("*/5 * * * *", syncTags); // every 5 mins


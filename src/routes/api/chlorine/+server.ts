import { supabase } from "$lib/supabaseClient";
import { json, error, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    const { data, error: dbError } = await supabase
        .from("freechlorine")
        .select("*")
        .order("date", { ascending: false });

    if (dbError) {
        throw error(500, { message: dbError.message });
    }

    return json(data); 
}
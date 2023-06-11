import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";

import getSongs from "./getSongs";

const getSongsByQuery = async (query: string): Promise<Song[]> => {

    const supabase = createServerComponentClient({
        cookies: cookies,
    });

    // TODO: add ability to search globally (not just by title)
}

export default getSongsByQuery;

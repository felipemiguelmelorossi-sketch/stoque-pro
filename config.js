const SUPABASE_URL = "COLE_AQUI_A_URL_DO_SEU_SUPABASE";
const SUPABASE_ANON_KEY = "sb_publishable_zZy8CirGsWqjzYIv2GIanA_BQaASny8";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

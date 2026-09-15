const SUPABASE_URL = "COLE_AQUI_A_URL_DO_SEU_SUPABASE";
const SUPABASE_ANON_KEY = "COLE_AQUI_A_CHAVE_ANON_DO_SEU_SUPABASE";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

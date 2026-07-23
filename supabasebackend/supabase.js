const supabaseUrl = "https://eflulwsoskktjbejdlck.supabase.co/rest/v1/";

const supabaseKey = "sb_publishable_3CjEYG7Fkq19NtLCylGXMA_lTEImEuR";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
console.log("Supabase connected:", supabase);
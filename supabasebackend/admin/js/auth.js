
// This prevents someone from opening dashboard.html directly without logging in.

(async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    window.location.href = "login.html";
  }
})();

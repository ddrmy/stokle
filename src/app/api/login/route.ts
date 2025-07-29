const res = await fetch("/api/login", {
  method: "POST",
  body: JSON.stringify({ email, password }),
});

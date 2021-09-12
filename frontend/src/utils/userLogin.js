const userLogin = (user, state) => {
  state.setLoading(true)
  fetch("/api/users/login", {
  method: "POST",
  body: JSON.stringify(user),
  headers: { "Content-type": "application/json; charset=UTF-8" },
  })
  .then(res => res.json())
  .then(res => {
    state.setUserInfo(res);
    localStorage.setItem('userInfo', JSON.stringify(res));
    state.setSuccess(true);
  })
  .catch((e) => state.setError("Invalid email or password"))
  .finally(() => state.setLoading(false))
}

export default userLogin;

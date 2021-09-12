const userSignUp = (user, setLoading, setError, setUserInfo) => {
  setLoading(true)
  fetch('/api/users/register', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {'Content-type': 'application/json; charset=UTF-8'}
  })
  .then(res => res.json())
  .then(res => {
    setUserInfo(res)
    localStorage.setItem('userInfo', JSON.stringify(res))
  })
  .catch(e => setError('Verify your information and try again'))
  .finally(() => setLoading(false))
}

export default userSignUp
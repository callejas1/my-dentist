const logout = () => {
  localStorage.removeItem('userInfo')
  document.location.href = '/'
}

export default logout;
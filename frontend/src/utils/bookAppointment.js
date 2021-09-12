const bookAppointment = (appointment, userInfo, state) => {
  state.setLoading(true)
  fetch('/api/appointment', {
  method: 'POST',
  body: JSON.stringify(appointment),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization': `Bearer ${userInfo.token}`,
  }
  })
  .then(res => res.json())
  .then(res => {
    appointment._id = res._id
    state.setAppointmentDetails({...appointment})
    state.setSuccess(true)

  })
  .catch(e => state.setError('Something went wrong, please try again'))
  .finally(()=> state.setLoading(false))
}

export default bookAppointment
const appointmentDetailsEmail = (id, userInfo,) => {
  fetch(`/api/appointment/${id}`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization': `Bearer ${userInfo.token}`,
  }
  })
  .then(res => res.json())
  .then(res => {
    console.log(res)
  })
  .catch(e => console.log('Something went wrong, please try again'))
}

export default appointmentDetailsEmail
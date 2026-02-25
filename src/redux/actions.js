export const fetchProfile = () => {
  return dispatch => {
    dispatch({
      type: 'PROFILE_LOAD'
    })
    fetch('https://api.intocode.ru:8001/api/profile')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'PROFILE_SUCCESS',
          payload: json
        })
      })
  }
}

export const fetchContact = () => {
  return dispatch => {
    dispatch({
      type: 'CONTACT_LOAD'
    })
    fetch('https://api.intocode.ru:8001/api/contacts')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'CONTACT_SUCCESS',
          payload: json
        })
      })
  }
}


export const fetchMesseges = (myId, contactId) => {
  return dispatch => {
    dispatch({
      type: 'MESSAGES_LOAD',
      payload: contactId
    })
    fetch(`https://api.intocode.ru:8001/api/messages/${myId}/${contactId}`)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'MESSAGES_SUCCESS',
          payload: json
        })
      })
  }
}

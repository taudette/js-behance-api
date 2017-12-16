import * as types from './actionTypes';

const clientId = 'Xz1atLQVuTxixwJj6PtgchWdylAz8c1e'
const URL = 'https://api.behance.net/v2/users'
//grab userId from initial request to pass into the rest

const recieveUsers = (data) => {
  return {
    type: types.GET_USERS,
    data: data
  }
}

const recieveUser = (data) => {
  return {
    type: types.GET_USER,
    data: data
  }
}

const recieveProjects = (data) => {
  return {
    type: types.GET_PROJECTS,
    data: data
  }
}

const recieveExperience = (data) => {
  return {
    type: types.GET_EXPERIENCE,
    data: data
  }
}

const recieveFollowers = (data) => {
  return {
    type: types.GET_FOLLOWERS,
    data: data
  }
}

const recieveFollowing = (data) => {
  return {
    type: types.GET_FOLLOWING,
    data: data
  }
}

//add loaders
export const getUsers = (search) => {
  const url = `${URL}?q=${search}&client_id=${clientId}`
  return (dispatch) => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText)
        }
        return resp
      })
      .then((resp) => resp.json())
      .then((data) => dispatch(recieveUsers(data)))
      .catch((error) => {
        return error
      })
  }
}

export const getUser = (userId) => {
  const url = `${URL}?q=${userId}?client_id=${clientId}`
  return (dispatch) => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText)
        }
        return resp
      })
      .then((resp) => resp.json())
      .then((data) => dispatch(recieveUser(data)))
      .catch((error) => {
        return error
      })
  }
}

export const getProjects = (userId) => {
  const url = `${URL}?q=${userId}/projects?client_id=${clientId}`
  return (dispatch) => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText)
        }
        return resp
      })
      .then((resp) => resp.json())
      .then((data) => dispatch(recieveProjects(data)))
      .catch((error) => {
        return error
      })
  }
}

export const getExperience = (userId) => {
  const url = `${URL}/${userId}/work_experience?client_id=${clientId}`
  return (dispatch) => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText)
        }
        return resp
      })
      .then((resp) => resp.json())
      .then((data) => dispatch(recieveExperience(data)))
      .catch((error) => {
        return error
      })
  }
}

export const getFollowers = (userId) => {
  const url = `${URL}/${userId}/followers?client_id=${clientId}`
  return (dispatch) => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText)
        }
        return resp
      })
      .then((resp) => resp.json())
      .then((data) => dispatch(recieveFollowers(data)))
      .catch((error) => {
        return error
      })
  }
}

export const getFollowing = (userId) => {
  const url = `${URL}/${userId}/following?client_id=${clientId}`
  return (dispatch) => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText)
        }
        return resp
      })
      .then((resp) => resp.json())
      .then((data) => dispatch(recieveFollowing(data)))
      .catch((error) => {
        return error
      })
  }
}
import * as types from './actionTypes';
import fetchJsonp from 'fetch-jsonp' //use to avoid cors issues

const clientId = 'Xz1atLQVuTxixwJj6PtgchWdylAz8c1e'
const URL = 'https://api.behance.net/v2'
//grab userId from initial request to pass into the rest

const recieveUsers = (data) => {
  return {
    type: types.GET_USERS,
    data: data.users
  }
}

const recieveUser = (data) => {

  return {
    type: types.GET_USER,
    data: data.user
  }
}

const recieveProjects = (data) => {
  console.log(data)
  return {
    type: types.GET_PROJECTS,
    data: data.projects
  }
}

const recieveExperience = (data) => {
  console.log(data)
  return {
    type: types.GET_EXPERIENCE,
    data: data.work_experience
  }
}

const recieveFollowers = (data) => {
  console.log(data)
  return {
    type: types.GET_FOLLOWERS,
    data: data.followers
  }
}

const recieveFollowing = (data) => {
  console.log(data)
  return {
    type: types.GET_FOLLOWING,
    data: data.following
  }
}


//add loaders
export const getUsers = (search) => {
  const url = `${URL}/users?client_id=${clientId}&q=${search}`
  return (dispatch) => {
    dispatch(recieveFollowers('tyedsy'))
    fetchJsonp(url)
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
  const url = `${URL}/users/${userId}?client_id=${clientId}`
  return (dispatch) => {
    fetchJsonp(url)
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
  const url = `${URL}/projects?q=${userId}&client_id=${clientId}`
  return (dispatch) => {
    fetchJsonp(url)
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
  const url = `${URL}/users/${userId}/work_experience?client_id=${clientId}`
  return (dispatch) => {
    fetchJsonp(url)
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
  const url = `${URL}/users/${userId}/followers?client_id=${clientId}`
  console.log(url)
  return (dispatch) => {
    fetchJsonp(url)
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
  const url = `${URL}/users/${userId}/following?client_id=${clientId}`
  return (dispatch) => {
    fetchJsonp(url)
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
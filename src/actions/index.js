import * as types from './actionTypes';
import fetchJsonp from 'fetch-jsonp' 

const clientId = 'Xz1atLQVuTxixwJj6PtgchWdylAz8c1e'
const URL = 'https://api.behance.net/v2'

export const toggleFollowing = () => {
  return {
    type: types.TOGGLE_FOLLOWING
  }
}

export const toggleFollowers = () => {
  return {
    type: types.TOGGLE_FOLLOWERS
  }
}

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
  return {
    type: types.GET_PROJECTS,
    data: data.projects
  }
}

const recieveExperience = (data) => {
  return {
    type: types.GET_EXPERIENCE,
    data: data.work_experience
  }
}

const recieveFollowers = (data) => {
  return {
    type: types.GET_FOLLOWERS,
    data: data.followers
  }
}

const recieveFollowing = (data) => {
  return {
    type: types.GET_FOLLOWING,
    data: data.following
  }
}

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

export const getUser = (userName) => {
  const url = `${URL}/users/${userName}?client_id=${clientId}`
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

export const getProjects = (userName) => {
  const url = `${URL}/projects?q=${userName}&client_id=${clientId}`
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

export const getExperience = (userName) => {
  const url = `${URL}/users/${userName}/work_experience?client_id=${clientId}`
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

export const getFollowers = (userName) => {
  const url = `${URL}/users/${userName}/followers?client_id=${clientId}`
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

export const getFollowing = (userName) => {
  const url = `${URL}/users/${userName}/following?client_id=${clientId}`
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
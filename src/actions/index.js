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

export const getUsers = (search) => {
  const url = `${URL}/users?client_id=${clientId}&q=${search}`
  return (dispatch) => {
    fetchJsonp(url)
      .then((resp, error) => {
        if (!resp.ok) {
          return error
        }
        return resp
      })
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.users) {
          throw Error('No users returned')
        } else {
          dispatch(recieveUsers(data.users))
        }
      })
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
      .then((data) => {
        if (!data.user) {
          throw Error('No user returned')
        } else {
          dispatch(recieveUser(data.user))
        }
      })
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
      .then((data) => {
        if (!data.projects) {
          throw Error('No projects returned')
        } else {
          dispatch(recieveProjects(data.projects))
        }
      })
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
      .then((data) => {
        if (!data.work_experience) {
          throw Error('No experience returned')
        } else {
          dispatch(recieveExperience(data.work_experience))
        }
      })
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
      .then((data) => {
        if (!data.followers) {
          throw Error('No followers returned')
        } else {
          dispatch(recieveFollowers(data.followers))
        }
      })
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
      .then((data) => {
        if (!data.following) {
          throw Error('No following returned')
        } else {
          dispatch(recieveFollowing(data.following))
        }
      })
      .catch((error) => {
        return error
      })
  }
}
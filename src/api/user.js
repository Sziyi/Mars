import request from '../utils/request'

const login = (data) => {
  return request({
    url: '/users/login',
    method: 'POST',
    data
  })
}
const list = () => {
  return request({
    url: '/menu/list',
    method: 'GET'
  })
}
export default {
  login,
  list
}

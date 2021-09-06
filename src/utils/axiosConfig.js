import axios from 'axios'

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
// instance.defaults.baseURL = `${process.env.GATSBY_API_URL}/asg-api/`
// const token = getToken()
// instance.defaults.headers.common['Authorization'] = `bearer ${token}`

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  //   headers: { 'X-Custom-Header': 'foobar' },
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default axiosInstance

import axios from 'axios'

// axiosInstance.defaults.baseURL = `${process.env.GATSBY_API_URL}/asg-api/`
// const token = getToken()

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
// axiosInstance.defaults.headers.common['Authorization'] = `bearer ${token}`


// export function getRequest(URL) {
//   alert(URL)
//   return axiosInstance.get(`/${URL}`).then(response => response);
// }

// export function postRequest(URL, payload) {
//   return axiosInstance.post(`/${URL}`, payload).then(response => response);
// }

// export function patchRequest(URL, payload) {
//   return axiosInstance.patch(`/${URL}`, payload).then(response => response);
// }

// export function deleteRequest(URL) {
//   return axiosInstance.delete(`/${URL}`).then(response => response);
// }

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

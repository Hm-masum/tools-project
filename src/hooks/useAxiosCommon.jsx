import axios from 'axios'

export const axiosCommon = axios.create({
  baseURL: "https://openapi.programming-hero.com/api/videos"
})
const useAxiosCommon = () => {
  return axiosCommon
}

export default useAxiosCommon
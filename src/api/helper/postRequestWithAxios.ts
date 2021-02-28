import axios from "axios"

const postRequestWithAxios=async(requestUrl:string, bodyData:any)=>{
  return await axios.post(requestUrl, bodyData)
}
export default postRequestWithAxios
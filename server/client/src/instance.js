
import axios from 'axios'

axios.defaults.withCredentials = true

const instance = axios.create({
  
    baseURL: "https://mernprojectdev.herokuapp.com",

})

export default instance


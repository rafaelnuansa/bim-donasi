//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://backend-donasi.binaimanmulia.id/api'
})

export default Api
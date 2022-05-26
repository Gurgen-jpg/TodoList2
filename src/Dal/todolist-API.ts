import axios from "axios";



const instance = axios.create({
    baseURL: ``,
    withCredentials: true,
    headers: {
        'API-KEY': `5b57e857-72cc-4cd7-9bd6-09b2eef89c9a`
    }
})


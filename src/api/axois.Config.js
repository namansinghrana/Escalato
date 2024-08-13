import axios from "axios";


export default axios.create({
    //baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
    baseURL: 'https://2c38-117-234-124-30.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning" : "true"}
});
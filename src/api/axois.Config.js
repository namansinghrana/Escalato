import axios from "axios";


export default axios.create({
    //baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
    baseURL: 'https://5b1f-2405-201-682b-f086-a8dd-bcd2-158c-43bd.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning" : "true"}
});
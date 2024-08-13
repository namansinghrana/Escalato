import axios from "axios";


export default axios.create({
    //baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
    baseURL: 'https://9aca-2405-201-682b-f086-55b6-5726-335c-c72e.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning" : "true"}
});
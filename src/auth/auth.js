import axios from 'axios';
import storePersist from '../redux/storePersist';


export const loginAuthService = async (loginData) => {
    const response = await axios.post('https://agiletech-test-api.zeabur.app/auth/login', {username: loginData});
   
    return response;
}




export const logoutService = async () => {
    const auth = storePersist.get('auth');
    const token = auth?.current.accessToken;
    const response = await axios.delete("https://agiletech-test-api.zeabur.app/auth/logout",  {
        headers: {
            "Authorization" : `Bearer ${token}`
        }});
    return response?.data;
}


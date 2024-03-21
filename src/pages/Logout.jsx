import { useEffect, useRef } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout  as logoutAction} from '../redux/auth/action';
import {  toast } from 'react-toastify';



const Logout = () => {
    const hasMounted = useRef(false);
    const dispatch = useDispatch();
const notifySuccess = () => toast("Logout success");

    const navigate = useNavigate();


    const asyncLogout = () => {
       
        dispatch(logoutAction());

    }

    useEffect(() => {
        if(!hasMounted.current){
            // This block will run only on the first render
            asyncLogout();
            notifySuccess();
            navigate('/login');
           hasMounted.current = true;
        }
    },[]);

}

export default Logout;
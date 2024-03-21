
import { loginAuthService, logoutService } from '../../auth/auth';
import * as actionTypes from './types';
import { ToastContainer, toast } from 'react-toastify';

export const login =({ loginData }) => async (dispatch) => {
  const notify = () => toast("Fail login");
    dispatch({
      type: actionTypes.REQUEST_LOADING,
    });
    const data = await loginAuthService( loginData );
    if (data?.data?.accessToken!=null) {
      const auth_state = {
        current: data.data,
        isLoggedIn: true,
        isLoading: false,
        isSuccess: true,
        validateLogin: ""
      };
   
      window.localStorage.setItem('auth', JSON.stringify(auth_state));
      window.localStorage.removeItem('isLogout');
      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
        payload: data.data,
      });
    } else {
        notify();
      dispatch({
        type: actionTypes.REQUEST_FAILED,
        payload: "Sai thông tin"
      });
    }
  };

  
export const logout = () => async (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT_SUCCESS,
  });

  const data = await logoutService();
  const result = window.localStorage.getItem('auth');
  const tmpAuth = JSON.parse(result);
  window.localStorage.removeItem('auth');
  window.localStorage.setItem('isLogout', JSON.stringify({ isLogout: true }));
  dispatch({
    type: actionTypes.LOGOUT_SUCCESS,
    payload: null,
  })
  //can't appear
  if (data.code ===null) {
    const auth_state = {
      current: tmpAuth,
      isLoggedIn: true,
      isLoading: false,
      isSuccess: true,
      validateLogin: ""
    };
    window.localStorage.setItem('auth', JSON.stringify(auth_state));
    window.localStorage.removeItem('isLogout');
    dispatch({
      type: actionTypes.LOGOUT_FAILED,
      payload: data.result,
    });
  }

};




  
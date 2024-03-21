import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../components/SignIn/signIn.css';
import {useDispatch,useSelector} from 'react-redux';
import { crud } from '../redux/crud/actions';
import { login } from '../redux/auth/action';
import {useNavigate} from 'react-router-dom'
import { selectAuth } from '../redux/auth/selector';
import { ToastContainer, toast } from 'react-toastify';
export const SignInPage = () => {
  const [name, setName] = useState("")
  const {isLoggedIn, isSuccess,validateLogin} = useSelector(selectAuth)
  const notify = () => toast(validateLogin);
  const notifySuccess = () => toast("Login success");

  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (event) => {
    const value = event.target.value;
    setName(value);

    // Validate input
    if (value.length == ""||value==undefined) {
      setError('Input required');
    } else {
      setError('');
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (name=="") {
      setError('Input required');
    } else {
      if (!error) {
        dispatch(login({loginData: name}));
      } 
    }

   
  }

  useEffect(() => {
    if(isSuccess&&isLoggedIn){
      notifySuccess();
      navigate('/');
    }
 
   
  }, [isSuccess]);

  return (
    
   <>
        <div className='container'>
        <div className='header-container' style={{marginTop: '14px'}}>
              <Link to={'/'}>
              
              <div className='header-logo'>
                   <div className='header-logo-square'></div>
                   <div className='header-logo-rectangle'></div>
                </div></Link>

            </div>

          <div className='container-x'>
            <div className='info'>
              <h1 className='sign-in'>Sign In</h1>
             <div className='form-div'>
             <form className='form-sign-in' onSubmit={handleSubmit}>

          <label htmlFor="email" className='label-sign-in' >Username:</label><br />
          <input type="text" className='input-sign-in'  value={name}  onChange={handleChange} name='username' />
          <span className="validation" style={{color: 'red', paddingBottom:'5px'}}>{error}</span>
          <br/>
          <button style={{border: 'none', cursor: 'pointer'}} className='button-sign-in' type='submit'>Sign In</button>
          </form>
             </div>
            </div>
          </div>
            

        </div>

   </>
  )
}

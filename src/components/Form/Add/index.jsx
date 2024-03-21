import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'
import { selectCreatedItem, selectListItems, selectTagItem } from '../../../redux/crud/selector';
import { crud } from '../../../redux/crud/actions';
import { ToastContainer, toast } from 'react-toastify';

const Add = () => {

    const { result: listResult} = useSelector(selectTagItem)
    const { isSuccess} = useSelector(selectCreatedItem)
    const [error, setError] = useState()
    const dispatch = useDispatch();
    const navigte = useNavigate();
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [tag,setTags] = useState([]);
  const notifySuccess = () => toast.error("Input title or description");
   
    const handleSubmit = (e) => {
        e.preventDefault();

        if(title==""||description==""){
           notifySuccess()
        }
        else {
        if(title&&description&&tag){
            const data1 = {
                title: title, 
                description: description,
                tags: tag
            }
               dispatch(crud.create({data: data1}))
        }
      
        }
           
        
    }


    useEffect(() => {
        dispatch(crud.tags());

    },[])
    useEffect(() => {
        if(isSuccess){
            navigte('/profile');
        }

    },[isSuccess])
  return (
    <div className='container21'>
      <div className='siderbar-profile'>
      <Link to={'/'}>
              <div className='header-logo header-logo-profile'>
                   <div className='header-logo-square'></div>
                   <div className='header-logo-rectangle'></div>
                </div></Link>
        <ul className='sider-navigation'>
          <li className='sider-navigation-li'><a href="">Post</a></li>
          <li className='sider-navigation-li'><Link to={'/logout'}>Logout</Link></li>
        </ul>
      </div>
      <div className='wrapper-right'>
        <div className='wrapper-right-inner'>
          <div className='header-table'>
          <Link to={'/profile'}>  <a href="" className='add-new'>Back</a></Link>
           
          </div>
            <div style={{paddingTop: '15px'}}></div>
          <form className='form-sign-in' onSubmit={handleSubmit} method='post'>

            <label htmlFor="title" className='label-sign-in' >Title:</label><br />
            <input type="text" className='input-sign-in' value={title} onChange={(e) =>setTitle( e.target.value)} name='title' />
            <span style={{color: 'red', display:'block'}}>{error?.title}</span>
            <label htmlFor="description" className='label-sign-in' >Description:</label><br />
          
          <textarea name="description" id="" cols="30" value={description} onChange={(e) => setDescription(e.target.value)} style={{width: '100%', height: '140px'}}></textarea>
          <span style={{color: 'red', display:'block'}}>{error?.description}</span>

            <label htmlFor="tag" style={{display:'block'}}>Tags</label>
            <select name="tags[]" id=""  onChange={e => {
            const options = [...e.target.selectedOptions];
            const values = options.map(option => option.value);
            setTags(values);
          }} multiple={true} style={{width: '100%', marginTop: '10px'}}>
              {listResult?.map((value, index) => (
                <option style={{padding: '10px', border: '1px solid gray'}} className='css-option' value={value}>{value}</option>
              ))}
            </select>
            <span style={{color: 'red',display:'block'}}>{error?.tag}</span>

         

            {/* <span className="validation" style={{color: 'red', paddingBottom:'5px'}}>{error}</span> */}
            <br/>
            <button style={{border: 'none', cursor: 'pointer', marginTop: '10px'}} className='button-sign-in' type='submit'>Submit</button>
            </form>


        </div>
      </div>
    </div>
  )
}

export default Add
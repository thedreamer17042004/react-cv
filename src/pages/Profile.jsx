import React, { useEffect, useState } from 'react'
import '../components/Profile/profile.css'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { crud } from '../redux/crud/actions';
import { selectDeletedItem, selectListItems } from '../redux/crud/selector';
import {useNavigate} from 'react-router-dom'
export const Profile = () => {


  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [page, setPage] = useState([]);
  const { result: listResult, isLoading: listIsLoading} = useSelector(selectListItems)
  const { isSuccess: isSuccessDeleted} = useSelector(selectDeletedItem)
  const { pagination, items: dataSource} = listResult;

  const options = { current_page: pagination.current || 1 };

  useEffect(() => {
    dispatch(crud.resetState())
    dispatch(crud.list({options}));
    // handlePageNumber();
  }, [])

  useEffect(() => {
    if(isSuccessDeleted){
    dispatch(crud.resetState())
    dispatch(crud.list({options}));
    }
  },[isSuccessDeleted])

  const handleDelete = (id) => {
    dispatch(crud.delete({id: id}));
    // dispatch(crud.list({options}))

  }

  const handleCurrent = ({id, title, description, tags}) => {
    const data = {
      id: id,
      title: title, 
      description: description, 
      tags: tags
    }
    dispatch(crud.read({data: data}));


    
  }
  const handlePageClick = (page) => {
    dispatch(crud.list({options: {current_page: page}}));
    setCurrentPage(page);
    // Perform actions based on the current page, such as fetching data
    // fetchData(page);
  };
  const paginationItems = [];
  for (let i = 1; i <= pagination?.total_page; i++) {
    paginationItems.push(
      <a key={i} href="#" className={currentPage === i ? 'active' : ''} onClick={() => handlePageClick(i)}>
        {i}
      </a>
    );
  }
  return (
    
   <>
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
           <Link to={'/profile/add'}> <a href="#" className='add-new'>Add new</a></Link>
            <div className='input-right'>
             <a href="#" className='title-lable'>Title</a>
             <a href="#" className='title-tag'>
              <span>Tags</span>
              <i class="fa-solid fa-arrow-down" style={{marginRight: '5px'}}></i>
             </a>
            </div>
          </div>

          <div className='wrapper-table-profile scroll-inner'>
            <table className='table-profile '>
              <thead style={{backgroundColor: '#D9D9D9'}}>
                <tr>
                  <th  className='th-profile th-active'>Id</th>
                  <th className='th-profile'>Title</th>
                  <th className='th-profile'>Description</th>
                  <th className='th-profile'>Tags</th>
                  <th className='th-profile' style={{width: '10px'}}>Actions</th>
                </tr>
              </thead>
              <div style={{width: '100%', height: '10px'}}></div>
              <tbody className='tbody-table'>
              {dataSource?.map((post, index) => (
                <>
                <tr>
                  <td className='td-profile'>{post?.id}</td>
                  <td className='td-profile'>{post?.title}</td>
                  <td className='td-profile'>{post?.description}</td>
                  <td className='td-profile'>{post?.tags}</td>
                  <td className='td-profile td-profile-action'>
                   <Link to={'/profile/edit'} onClick={() => handleCurrent({id: post?.id, title: post?.title, description: post?.description, tags: post?.tags})}> <a href=""><i class="fas fa-edit" style={{color: 'black'}}></i></a></Link>
                   <a href="#"><i class="fa-solid fa-trash" onClick={() => handleDelete(post?.id)} style={{color: 'black', marginLeft: '6px'}}></i></a>
                  </td>
                </tr>
               
                </>
              ))}
                
              </tbody>
            </table>
           <div className='wrapper-pagination'>
           <div class="pagination">
           <a href="#" onClick={() => handlePageClick(currentPage - 1)}>&laquo;</a>
        {paginationItems}
        <a href="#" onClick={() => handlePageClick(currentPage + 1)}>&raquo;</a>
              </div>
           </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

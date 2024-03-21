import request from '../../request/request';
import * as actionTypes from './types';
// import request from '../../request/request';

export const crud = {

  resetState:
  (props = {}) =>
  async (dispatch) => {
    dispatch({
      type: actionTypes.RESET_STATE,
    });
  },

  list: ({  options = { page: 1, items: 5 } }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'list',
        payload: null,
      });

      let data = await request.listAll({options });


      if (data != null) {
        const result = {
          items: data?.posts,
          pagination: {
            current: data?.current_page,
            pageSize: data?.page_size,
            total_page:data?.total_page
            // showSizeChanger: true,
          
          },
        };
   
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'list',
          payload: result,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'list',
          payload: null,
        });
      }
    },

    tags: () =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'tag',
        payload: null,
      });

      let data = await request.tagList();
      

      if (data != null) {
        
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'tag',
          payload: data,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'tag',
          payload: null,
        });
      }
    },
    create: ({data}) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'create',
        payload: null,
      });

      let data1 = await request.create({data});
      
      if (data1 != null) {
        
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'create',
          payload: data,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'create',
          payload: null,
        });
      }
    },
    read: ({data}) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'read',
        payload: null,
      });

     
      if (data != null) {
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'read',
          payload: data,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'read',
          payload: null,
        });
      }
    },
    update: ({data}) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'update',
        payload: null,
      });
      let data1 = await request.update({data});
    
      if (data1 != null) {
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'update',
          payload: data1,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'update',
          payload: null,
        });
      }
    },
    delete: ({id}) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'delete',
        payload: null,
      });
      let data1 = await request.delete({id});
    
      if (data1 != null) {
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'delete',
          payload: data1,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'delete',
          payload: null,
        });
      }
    },
    gallary: () =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'gallary',
        payload: null,
      });
      let data1 = await request.gallary();
    
      if (data1 != null) {
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'gallary',
          payload: data1,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'gallary',
          payload: null,
        });
      }
    },

 
};

import axios from 'axios';
import storePersist from '../redux/storePersist';

const request = {
  listAll: async ({options}) => {

    try {
        const {current_page} = options;
        
        const auth = storePersist.get('auth');
        const token = auth?.current.accessToken;
      // const response = await axios.get(`http://localhost:8080/api/${entity}`);
      const response = await axios.get(`https://agiletech-test-api.zeabur.app/posts?page=${current_page}`,
      {
        headers: {
            "Authorization" : `Bearer ${token}`
        }});

     
      return response?.data;
    } catch (error) {

    }
  },
  tagList: async () => {

    try {
     
        const auth = storePersist.get('auth');
        const token = auth?.current.accessToken;
      // const response = await axios.get(`http://localhost:8080/api/${entity}`);
      const response = await axios.get(`https://agiletech-test-api.zeabur.app/posts/tags`,
      {
        headers: {
            "Authorization" : `Bearer ${token}`
        }});


      return response?.data;
    } catch (error) {

    }
  },
  gallary: async () => {

    try {
     
        const auth = storePersist.get('auth');
        const token = auth?.current.accessToken;
      // const response = await axios.get(`http://localhost:8080/api/${entity}`);
      const response = await axios.get(`https://agiletech-test-api.zeabur.app/galleries`,
      {
        headers: {
            "Authorization" : `Bearer ${token}`
        }});

      return response?.data;
    } catch (error) {

    }
  },
  create: async ({data}) => {

    try {

     
        const auth = storePersist.get('auth');
        const token = auth?.current.accessToken;
      // const response = await axios.get(`http://localhost:8080/api/${entity}`);
      const response = await axios.post(`https://agiletech-test-api.zeabur.app/posts`,data,
      {
        headers: {
            "Authorization" : `Bearer ${token}`
        }});


      return response?.data;
    } catch (error) {

    }
  },
  update: async ({data}) => {

    try {


      const {id} = data;
        const auth = storePersist.get('auth');
        const token = auth?.current.accessToken;
      // const response = await axios.get(`http://localhost:8080/api/${entity}`);
      const response = await axios.patch(`https://agiletech-test-api.zeabur.app/posts/${id}`,data,
      {
        headers: {
            "Authorization" : `Bearer ${token}`
        }});



      return response?.data;
    } catch (error) {

    }
  },
  delete: async ({id}) => {

    try {

        const auth = storePersist.get('auth');
        const token = auth?.current.accessToken;
     
      const response = await axios.delete(`https://agiletech-test-api.zeabur.app/posts/${id}`,
      {
        headers: {
            "Authorization" : `Bearer ${token}`
        }});

      return response?.data;
    } catch (error) {

    }
  },
}


export default request;

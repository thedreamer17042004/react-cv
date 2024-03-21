import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage';
import AppRouter from './router/AppRouter';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, Outlet } from "react-router-dom";


function App() {
  return (
    <div className="">
     {/* <HomePage/> */}
     <AppRouter/>
     <ToastContainer autoClose={1000}/>
     <Outlet/>
   
    </div>
  );
}

export default App;

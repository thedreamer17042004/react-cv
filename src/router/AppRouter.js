import {Routes, Route } from 'react-router-dom';

import { Profile } from '../pages/Profile';
import { SignInPage } from '../pages/SignInPage';
import { HomePage } from '../pages/HomePage';
import Logout from '../pages/Logout';
import PrivateRoute from '../components/Profile/PrivateRoutes';
import PageNotFound from '../pages/NotFound';
import AuthProvider from '../request/authene';
import Add from '../components/Form/Add';
import Edit from '../components/Form/Update';


export default function AppRouter() {

    return (
        <AuthProvider>
               <Routes> 
               <Route element={<PrivateRoute />}>
              <Route element={<Profile />} path='/profile' />
             <Route element={<Add />} path='/profile/add' />
             <Route element={<Edit />} path='/profile/edit' />

            </Route>
            
            <Route element={<SignInPage />} path='/login' />
            <Route element={<Logout />} path='/logout' />
             <Route element={<HomePage />} path='/' />
             <Route
                    path="*"
                    element={<PageNotFound />}
                />
        </Routes>
           </AuthProvider>
    );
}

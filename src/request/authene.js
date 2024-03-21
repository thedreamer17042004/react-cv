import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import storePersist from "../redux/storePersist";
import {useSelector} from 'react-redux';
import { selectAuth } from "../redux/auth/selector";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const {current, isSuccess} = useSelector(selectAuth)

  const [token, setToken] = useState(current?.accessToken);
  const navigate = useNavigate();
  useEffect(() => {
    const current1 = storePersist.get('auth')
    if (current1) {
      setToken(current1?.current?.accessToken);
    }
  }, [isSuccess]);

  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
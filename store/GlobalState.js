import reducers from './Reducers';
import { useReducer, useEffect, createContext } from 'react';
import { getData } from '../utils/fetchData';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {}, users: [] };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { auth } = state;

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) {
      getData('/accessToken').then((res) => {
        if (res.err) return localStorage.removeItem('firstLogin');
        dispatch({
          type: 'AUTH',
          payload: {
            token: res.access_token,
            user: res.user
          }
        });
      });
    }
  }, []);

  useEffect(() => {
    if (auth.token) {
      if (auth.user.role === 'admin') {
        getData('user', auth.token).then((res) => {
          if (res.err)
            return dispatch({ type: 'NOTIFY', payload: { error: res.err } });

          dispatch({ type: 'ADD_USERS', payload: res.users });
        });
      }
    } else {
      dispatch({ type: 'ADD_USERS', payload: [] });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.token]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

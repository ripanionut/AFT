import Head from 'next/head';
import { useState, useContext } from 'react';
import { DataContext } from '../store/GlobalState';
import { postData } from '../utils/fetchData';
import Cookie from 'js-cookie';

const Login = () => {
  const initialState = {
    email: '',
    password: ''
  };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const { state, dispatch } = useContext(DataContext);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'NOTIFY', payload: { loading: true } });
    const res = await postData('/login', userData);

    if (res.err)
      return dispatch({ type: 'NOTIFY', payload: { error: res.err } });
    dispatch({ type: 'NOTIFY', payload: { success: res.msg } });

    dispatch({
      type: 'AUTH',
      payload: {
        token: res.access_token,
        user: res.user
      }
    });

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/accessToken',
      expires: 7
    });

    localStorage.setItem('firstLogin', true);
    console.log("tedst")
  };

  return (
    <div>
      <div>
        <Head>
          <title>Welcome to Next.js!</title>
        </Head>
      </div>
     
        <div class="flex justify-center pt-3 px-0">
          <div class="w-11/12 p-5 bg-white sm:w-11/12 md:w-3/4 lg:w-8/12">
            <h1 class="text-xl text-center pb-3 font-semibold">
              Hello there 👋
            </h1>
            <form class="mt-6" onSubmit={handleSubmit}>
              <label
                for="email"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={handleChangeInput}
                placeholder="john.doe@company.com"
                autocomplete="email"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <label
                for="password"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={handleChangeInput}
                placeholder="john.doe@company.com"
                placeholder="********"
                autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <button
                href="/registeruser"
                type="submit"
                class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                Login
              </button>
              <a
                type="submit"
                href="/registeruser"
                class="text-xl flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
                Nu ai cont ? - Inregistrare
              </a>
            </form>
          </div>
        </div>
      
    </div>
  );
};
export default Login;

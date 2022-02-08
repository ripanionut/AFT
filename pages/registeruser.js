import Head from 'next/head';
import Layout from '../components/layout';
import { useState, useContext } from 'react';
import validregister from '../utils/validuser';
import { postData } from '../utils/fetchData';
import { DataContext } from '../store/GlobalState';

export default function Register() {
  const initialState = {
    nume: '',
    prenume: '',
    email: '',
    telefon: '',
    password: '',
    cf_password: ''
  };
  const [userData, setUserData] = useState(initialState);
  const { nume, prenume, email, telefon, password, cf_password } = userData;
  const [state, dispatch] = useContext(DataContext);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = validregister(nume, prenume, email,telefon, password, cf_password);
    if (errMsg) {
      return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });
    }
    dispatch({ type: 'NOTIFY', payload: { Loading: true } });

    const res = await postData('/adduser', userData);
    console.log(res);

    if (errMsg) {
      return dispatch({ type: 'NOTIFY', payload: { error: res.err } });
    }
    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
  };

  return (
    <div>
      <div>
        <Head>
          <title>Welcome to Next.js!</title>
        </Head>
      </div>
      <Layout>
        <div class="flex justify-center pt-3 px-0">
          <div class="w-11/12 p-2 bg-white sm:w-11/12 md:w-3/4 lg:w-8/12">
            <h1 class="text-xl text-center pb-3 font-semibold">Hello there 👋</h1>
            <form class="mt-6" onSubmit={handleSubmit}>
              <div class="flex justify-between gap-3">
                <span class="w-1/2">
                  <label
                    for="firstname"
                    class="block text-xs font-semibold text-gray-600 uppercase">
                    Nume
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="nume"
                    value={nume}
                    onChange={handleChangeInput}
                    placeholder="John"
                    autocomplete="given-name"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  />
                </span>
                <span class="w-1/2">
                  <label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase">
                    Prenume
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="prenume"
                    onChange={handleChangeInput}
                    value={prenume}
                    placeholder="Doe"
                    autocomplete="family-name"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    
                  />
                </span>
              </div>
              <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={handleChangeInput}
                placeholder="email.doe@company.com"
                autocomplete="email"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                
              />
              <label for="telefon" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                telefon
              </label>
              <input
                id="telefon"
                type="telefon"
                name="telefon"
                value={telefon}
                onChange={handleChangeInput}
                placeholder="07********"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                
              />
              <label
                for="password"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Parola
              </label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={handleChangeInput}
                value={password}
                placeholder="********"
                autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                
              />
              <label
                for="password-confirm"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Confirmare Parola
              </label>
              <input
                id="password-confirm"
                type="password"
                onChange={handleChangeInput}
                name="cf_password"
                value={cf_password}
                placeholder="********"
                autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                
              />
              <button
                href="/registeruser"
                type="submit"
                class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                Register
              </button>
              <a
                href="/login"
                class="text-xl flex justify-between inline-block mt-4 text-xs text-gray-700 cursor-pointer hover:text-black">
                Already registered?
              </a>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

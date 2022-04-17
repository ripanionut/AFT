/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';
import Cookie from 'js-cookie';

function NavBar() {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const router = useRouter();

  const Root = () => {
    return (
      <Link href="/admin2">
        <a className="text-red-500 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
          Admin Area{' '}
        </a>
      </Link>
    );
  };
  const RootDropDown = () => {
    return (
      <Link href="/admin2">
        <a className="text-red-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          Admin Area
        </a>
      </Link>
    );
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    Cookie.remove('refreshtoken', { path: 'api/accessToken' });
    localStorage.removeItem('firstLogin');
    await dispatch({ type: 'AUTH', payload: {} });
    await dispatch({ type: 'NOTIFY', payload: { success: 'Logged out!' } });
    window.location.reload(false);
    return router.push('/');
  };
  const loggedRoutermobile = () => {
    return (
      <> {auth.user.role === 'admin' && RootDropDown()}
        <Link href="/admin">
          <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Adauga Sd
          </a>
        </Link>
       
        {/* <Link href="/admin2">
          <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Admin Area
          </a>
        </Link> */}
      </>
    );
  };
  const loggedRouter = () => {
    return (
      <>{
        auth.user.role === 'admin' && Root()
      }
        <Link href="/admin">
          <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
            Adauga Sd
          </a>
        </Link>
        
      </>
    );
  };

  
  const login = () => {
    return (
      <>
        <p
          style={{ textTransform: 'capitalize' }}
          className=" text-gray-300 hover:bg-gray-500 hover:text-white px-1 py-2 rounded-md text-md font-medium">
         
        </p>

        <button
          onClick={handleLogout}
          className="text-gray-300 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-md font-medium">
          Logout
        </button>
      </>
    );
  };
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex-shrink-0 flex items-center">
              <Link href="https://www.armyacademy.ro/">
                <a
                  type="button"
                  className="bg-gray-800 flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  target="_black">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-11 w-11 rounded-full"
                    src="\images\logo.png"
                    alt=""></img>
                </a>
              </Link>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div id="mobile-menu" className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link href="/">
                    <a
                      className="bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      aria-current="page">
                      Studenti
                    </a>
                  </Link>

                  {Object.keys(auth).length === 0 ? <></> : loggedRouter()}
                  <Link href="/regulament">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
                      Regulament
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                  </button>
                </div>
              </div>
              {Object.keys(auth).length === 0 ? (
                <>
                <Link  href="/login">
                  <a
                   
                    className="text-gray-300 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                    Login
                  </a>
                  </Link>
                </>
               
              ) : (
                login()
              )}
              <div className="relative"></div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <a
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page">
                Studenti
              </a>
            </Link>
            {Object.keys(auth).length === 0 ? <></> : loggedRoutermobile()}

            <Link href="/regulament">
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Regulament
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;

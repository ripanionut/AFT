import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';
import Cookie from 'js-cookie';

function NavBar() {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const loggedRouter = () => {
    return (
      <>
        <a
          href="/admin"
          class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Admin Menu1
        </a>
        <a
          href="/admin2"
          class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Admin Menu2
        </a>
      </>
    );
  };
  const login = () => {
    return (
      <>
        <p
          style={{ textTransform: 'capitalize' }}
          class="text-gray-300 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-md font-medium">
          {auth.user.nume} {auth.user.prenume}
        </p>
        <a
          href="/logout"
          class="text-gray-300 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-md font-medium">
          Logout
        </a>
      </>
    );
  };
  return (
    <div>
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 flex items-center">
                <a
                  type="button"
                  class="bg-gray-800 flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  href="https://www.armyacademy.ro/"
                  target="_black">
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    src="\images\logo.png"
                    alt=""></img>
                </a>
              </div>
              <div id="mobile-menu" class="hidden sm:block sm:ml-6">
                <div class="flex space-x-4">
                  <a
                    href="/"
                    class="bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page">
                    Studenti
                  </a>
                  {Object.keys(auth).length === 0 ? (
                    <>
                      <a
                        href="/adminarea"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Admin Area Only{' '}
                      </a>
                    </>
                  ) : (
                    loggedRouter()
                  )}
                  <a
                    href="/regulament"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Regulament
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="ml-3 relative">
                <div>
                  <button
                    type="button"
                    class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                  </button>
                </div>
              </div>
              {Object.keys(auth).length === 0 ? (
                <>
                  <a
                    href="/login"
                    class="text-gray-300 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-md font-medium">Login</a>
                </>
              ) : (
                login()
              )}
              <div class="relative"></div>
            </div>
          </div>
        </div>

        <div class="sm:hidden" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page">
              Studenti
            </a>

            <a
              href="/admin"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Admin Menu1
            </a>
            <a
              href="/admin2"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Admin Menu2
            </a>
            <a
              href="/login
      "
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Regulament
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;

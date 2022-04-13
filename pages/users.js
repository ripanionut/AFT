import Head from 'next/head';
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';
import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { deleteData } from '../utils/fetchData';
// import user from './api/user';

const Users = () => {
  const { state, dispatch } = useContext(DataContext);
  const { users, auth } = state;

  const deleteUser = (e) => {
    console.log(user.nume);
    deleteData(`user/${e.id}`, auth.token).then((res) => {
      if (res.err)
        return dispatch({ type: 'NOTIFY', payload: { error: res.err } });
      return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
    });
  };

  if (!auth.user) return null;
  const Root = () => {
    return (
      <td class="px-6 py-4 text-right">
        <button
          // onClick={deleteUser}
          class="font-medium text-red-600 dark:text-blue-500 hover:underline">
          Sterge
        </button>
      </td>
    );
  };
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-1">
        <table class="w-full text-sm text-left text-gray-700 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-2 py-3">
                Nr
              </th>
              <th scope="col" class="px-6 py-3">
                nume
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Telefon
              </th>
              <th scope="col" class="px-6 py-3">
                Rol
              </th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>{' '}
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} class="bg-white dark:bg-gray-800">
                <th class="px-2 py-3">{index + 1}</th>

                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {user.nume} {user.prenume}
                </th>
                <td class="px-6 py-4">{user.email}</td>
                <td class="px-6 py-4">{user.telefon}</td>
                <td class="px-6 py-4">{user.role}</td>
                {auth.user.root === true && Root()}
              </tr>
            ))}{' '}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

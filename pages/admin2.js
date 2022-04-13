import Head from 'next/head';
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';
import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';

export default function Admin2() {
  const { state, dispatch } = useContext(DataContext);

  const { auth } = state;
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(auth).length === 0) router.push('/');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <div className=" grid flex items-stretch">

      <div className="lg:mx-48 md:mx-24">
        <Link href="/registeruser">
          <a className="m-5 text-white bg-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Creaza cont utilizator (Cadre) 
          </a>
        </Link>
        <Link href="/admin">
          <a className="m-5 text-white bg-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Adauga Student in baza de date
          </a>
        </Link>
        <Link href="/">
          <a className="m-5 text-white bg-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Vizualizare Studenti{' '}
          </a>
        </Link>
        <Link href="/users">
          <a className="m-5 text-white bg-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Vizualizare Cadre{' '}
          </a>
        </Link>
        <Link href="/detail">
          <a className="m-5 text-white bg-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Admin2 - Editare studenti - soon... 
          </a>
        </Link>
        <Link href="/detail">
          <a className="m-5 text-white bg-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Aplicare Santiuni / Recompense - soon... 
          </a>
        </Link>
      </div>
    </div>
  );
}

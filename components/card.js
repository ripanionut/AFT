import { getData } from '../utils/fetchData';
import { useState } from 'react';
import Head from 'next/head';

const Card = ({ sd }) => {
  return (
    <div
      className="max-w-sm bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <span>{sd.nume}</span> <span>{sd.prenume}</span>
        </h5>

        <p className="mb-3 font-bold text-gray-900 dark:text-white">
          Pluton {sd.pluton} Companie {sd.companie} Batalion {sd.batalion}
        </p>
        <p className="mb-3 font-bold text-gray-900 dark:text-white">
          Nr.Telefon: {sd.telefon}
        </p>
        <p className="mb-3 font-bold text-gray-900 dark:text-white">
          Istoric: {sd.istoric}
        </p>
        <p className="mb-3 font-bold text-gray-900 dark:text-white">
          Puncte: {sd.puncte}
        </p>
        <a
          href={`post/${sd._id}`}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Mai multe informatii
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;



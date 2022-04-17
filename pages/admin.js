import { useState, useContext, useEffect } from 'react';
import valid from '../utils/valid';
import { postData } from '../utils/fetchData';
import { DataContext } from '../store/GlobalState';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function AddSd() {
  const initialState = {
    Id: '',
    nume: '',
    prenume: '',
    pluton: '1',
    companie: '1',
    batalion: '1',
    telefon: '',
    istoric: 'Default : Nu Exista',
    puncte: ''
  };
  const [sdData, setSdData] = useState(initialState);

  const {
    Id,
    nume,
    prenume,
    pluton,
    companie,
    batalion,
    telefon,
    istoric,
    puncte
  } = sdData;
  const { state, dispatch } = useContext(DataContext);

  const { auth } = state;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setSdData({ ...sdData, [name]: value });
  };
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(
      Id,
      nume,
      prenume,
      pluton,
      companie,
      batalion,
      telefon,
      istoric,
      puncte
    );

    if (errMsg) {
      return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });
    }
    
    dispatch({ type: 'NOTIFY', payload: { Loading: true } });

    const res = await postData('/add', sdData);
    if (errMsg) {
      return dispatch({ type: 'NOTIFY', payload: { error: res.err } });
    }
    setSdData(initialState)

    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
  };

  useEffect(() => {
    if (Object.keys(auth).length === 0) router.push('/');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[auth]);

  return (
    <div>
      <div className="flex justify-center pt-5 px-3">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-0">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password">
                Id/CNP{' '}
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 border-red-500 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-id"
                type="text"
                placeholder="ID"
                name="Id"
                value={Id}
                onChange={handleChangeInput}
              />
              {/* <p className="text-gray-600 text-xs italic py-0.5">
									Make it as long and as
									crazy as you'd like
								</p> */}
            </div>
            <div className="w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name">
                Nume
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="nume"
                type="text"
                placeholder="Nume"
                name="nume"
                value={nume}
                onChange={handleChangeInput}
              />
            </div>
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Prenume
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="preume"
                type="text"
                placeholder="Prenume"
                name="prenume"
                value={prenume}
                onChange={handleChangeInput}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state">
                Pluton
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="pluton"
                  value={pluton}
                  onChange={handleChangeInput}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state">
                Companie
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="companie"
                  value={companie}
                  onChange={handleChangeInput}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state">
                Batalion
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="batalion"
                  value={batalion}
                  onChange={handleChangeInput}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password">
            Nr.Telefon{' '}
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="telefon"
            type="text"
            placeholder="07********"
            name="telefon"
            value={telefon}
            onChange={handleChangeInput}
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password">
            ISTORIC Disciplinar{' '}
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-id"
            type="text"
            placeholder="Abateri / Recompense"
            name="istoric"
            value={istoric}
            onChange={handleChangeInput}
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password">
            Puncte Acumulate{' '}
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-id"
            type="text"
            placeholder="Puncte"
            name="puncte"
            value={puncte}
            onChange={handleChangeInput}
          />

          <div className="pt-2 flex justify-center">
            <button
              type="submit"
              className="shadow bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              Adauga
            </button>
            <Link href="/admin">
            <a
              type="reset"
              className=" mx-3 shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              Lista Studenti
            </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

import { useState } from 'react';

export default function Test() {
 

  let intialState = [
    { date: '', motiv: '', puncte: '' },
    { date: '', motiv: '', puncte: '' }
  ];
  const [inputList, setInputList] = useState(intialState);

  const handleChangeInput = (e, i) => {
    const { name, value } = e.target;

    const list = [...inputList];
    list[i][name] = value;

    setInputList(list);
  };

  const handleAddInput = () => {
    setInputList([...inputList, { date: '', motiv: '', puncte: '' }]);
  };

  const handleRemoveInput = (i) => {
    const list = [...inputList];
    list.splice(i, 1);
    setInputList(list);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputList);
  };
  return (
    <div>
      
      <div className="flex justify-center pt-5 px-0 ">
        
        <div className="w-11/12 p-2 bg-white sm:w-11/12 md:w-3/4 lg:w-5/12">
        <div className="font-bold text-xl mb-2">
             Acordare Sanctiuni si Recompense
            </div>
          <form className="mt-3 " onSubmit={handleSubmit}>
            {inputList.map((x, i) => {
              return (
                <div className="my-5" key={i}>
                  <div className="flex justify-between gap-3 ">
                    <span className="w-1/2">
                      <label
                        htmlFor="firstname"
                        className="block text-xs font-semibold text-gray-600 uppercase">
                       DATA
                      </label>
                      <input
                        id="firstname"
                        type="date"
                        value={x.date}
                        type="date"
                        name="date"
                        placeholder="date"
                        onChange={(e) => handleChangeInput(e, i)}
                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      />
                    </span>
                    <span className="w-1/2">
                      <label
                        htmlFor="lastname"
                        className="block text-xs font-semibold text-gray-600 uppercase">
                       Nr de puncte
                      </label>
                      <input
                        step="5"
                        id="lastname"
                        value={x.puncte}
                        type="number"
                        name="puncte"
                        placeholder="Puncte"
                        onChange={(e) => handleChangeInput(e, i)}
                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      />
                    </span>
                  </div>{' '}
                  <div className="flex justify-between gap-3 ">
                  <span className="w-3/4">
                    <label
                      htmlFor="email"
                      className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                      Motiv
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={x.motiv}
                      type="text"
                      name="motiv"
                      placeholder="motiv"
                      onChange={(e) => handleChangeInput(e, i)}
                      className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      />
                  </span>
                  <span className="w-1/4">
                  <input
                      className="block w-full pl-2.5 p-3 mt-8 text-white bg-red-500 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      onClick={() => handleRemoveInput(i)}
                    type="button"
                    value="Remove"
                  />
                  </span>
                  <span className="w-1/4">
                  <input
                      className=" block w-full p-3 mt-8 text-white bg-blue-500 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      onClick={handleAddInput}
                    type="button"
                    value="Add"
                  />
                  </span>
                  </div>
                </div>
              );
            })}
            <button
              href="/registeruser"
              type="submit"
              className="w-full py-3 mb-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
              Salveaza
            </button>
          </form>
        </div>
        {/* <pre>{JSON.stringify(inputList, null, 2)}</pre> */}
      </div>
    </div>
  );
}

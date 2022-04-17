import { useState, useContext } from 'react';
import { getData } from '../../utils/fetchData';
import { DataContext } from '../../store/GlobalState';
import { putData } from '../../utils/fetchData';

const DetailProduct = (props) => {
  const [post] = useState(props.post);

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  let initialState = post.punctearr;
  const [inputIstoric, setInputIstoric] = useState(post.istoric);
  const [inputList, setInputList] = useState(initialState);

  const handleChangeInputIstoric = (e) => {
    const isotric = e.target.value;
    setInputIstoric(isotric);
    console.log(inputIstoric);
  };

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
  var x = Number(0);
  for (var i = 0; i < inputList.length; i++) {
    x += Number(inputList[i].puncte);
  }

  var totalpuncte = x;

  const handleSubmit = async (e) => {
    e.preventDefault();
     await putData(
      `post/${post._id}`,
      { inputList, totalpuncte, inputIstoric },
      auth.token
    ).then((res) => {
      if (res.err)
        return dispatch({ type: 'NOTIFY', payload: { error: res.err } });
      return dispatch({ type: 'NOTIFY', payload: { success: ' ' } });
    });

    // console.log(post._id);
    // console.log(inputList);
  };

  var statee = {
    curTime: new Date().toLocaleString()
  };
 
  return (
    <div>
      <h1 className="pt-4 text-xl text-center font-semibold">
        Data Curenta : {statee.curTime}
      </h1>
      <div className="px-3 pb-5 pt-3 grid text-center grid-cols-1 sm:grid-cols-1 md:grid-cols- lg:grid-cols-1 xl:grid-cols-1 gap-5">
        <div className="rounded overflow-hidden shadow-lg">
          <div className="px-6 pt-2">
            <div className="font-bold text-xl mb-2">
              {post.nume} {post.prenume}
            </div>
            <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm  mb-2">
              Pl1
            </span>
            <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm   mx-2 ">
              Cp3
            </span>
            <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm   mr-2 ">
              B2
            </span>
            <div className="font-bold text-md mb-2">Telefon : {post.telefon}</div>

            <p className="text-gray-700 text-base">
              <span className="font-bold text-lg">Nr acumulat de puncte :</span>{' '}
              {x}
            </p>
          </div>
          <div>
            <div className="flex justify-center px-0 ">
              <div className="w-11/12 p-2 bg-white sm:w-11/12 md:w-3/4 lg:w-5/12">
                <form className="mt-3 " onSubmit={handleSubmit}>
                  <p className="text-gray-700 text-base">
                    <span className="font-bold text-xl">Istoric Disciplinar</span>
                  </p>
                  <span className="w-1/2">
                    <label
                      i={1}
                      htmlFor="firstname"
                      className="block text-xs text-left font-semibold text-gray-600 uppercase">
                      Istoric{' '}
                    </label>
                    <input
                      disabled={Object.keys(auth).length === 0 ? true : false}
                      id="firstname"
                      type="text"
                      value={inputIstoric}
                      name="date"
                      placeholder={post.istoric}
                      onChange={(e) => handleChangeInputIstoric(e)}
                      className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    />
                  </span>
                  <div className="font-bold text-xl mt-2">
                    Acordare Sanctiuni si Recompense
                  </div>
                  {inputList.map((x, i) => {
                    return (
                      <div className="my-5 p-3 border-solid border-2 border-gray-600 rounded-xl " key={i}>
                        <div className="flex justify-between gap-3 ">
                          <span className="w-1/2">
                            <label
                              htmlFor="firstname"
                              className="block text-xs text-left font-semibold text-gray-600 uppercase">
                              DATA
                            </label>
                            <input
                              disabled={
                                Object.keys(auth).length === 0 ? true : false
                              }
                              id="firstname"
                              type="date"
                              value={x.date}
                              name="date"
                              placeholder="date"
                              onChange={(e) => handleChangeInput(e, i)}
                              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            />
                          </span>
                          <span className="w-1/2">
                            <label
                              htmlFor="lastname"
                              className="block text-xs  text-green-500 font-semibold text-gray-600 uppercase">
                              Nr de puncte
                            </label>
                            <input
                              disabled={
                                Object.keys(auth).length === 0 ? true : false
                              }
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
                          <span className="w-2/4">
                            <label
                              htmlFor="email"
                              className="block text-left mt-2 text-xs font-semibold text-gray-600 uppercase">
                              Motiv
                            </label>
                            <input
                              disabled={
                                Object.keys(auth).length === 0 ? true : false
                              }
                              id="email"
                              type="text"
                              value={x.motiv}
                              name="motiv"
                              placeholder="motiv"
                              onChange={(e) => handleChangeInput(e, i)}
                              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            />
                          </span>
                          {Object.keys(auth).length === 0 ? (
                            <></>
                          ) : (
                            <>
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
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {Object.keys(auth).length === 0 ? null : (
                    <button
                      href="/registeruser"
                      type="submit"
                      className="w-full py-3 mb-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                      Salveaza
                    </button>
                  )}
                </form>
              </div>
              {/* <pre>{JSON.stringify(inputList, null, 2)}</pre> */}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg"></div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`post/${id}`);
  console.log(res);
  return {
    props: { post: res.post }
    // will be passed to the page component as props
  };
}

export default DetailProduct;

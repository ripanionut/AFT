import Link from 'next/link';
const Regulament = () => {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-4 ">
        <div className="flex flex-col ">
          <div className="w-full">
            <div className="container flex justify-center">
              <Link href="/regulament">
                <a className="px-3 mx-3  py-1 text-xl text-white bg-red-400 rounded">
                  Sanctiuni
                </a>
              </Link>

              <Link href="/regulament+">
                <a className="px-2 py-1 text-xl text-white bg-green-600 rounded">
                  Recompense
                </a>
              </Link>
            </div>
            <div className="border-b border-gray-300 shadow py-3">
              <table>
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-2 py-2 text-md text-black-600 ">NR</th>

                    <th className="px-2 py-2 text-md text-black-600 ">Regula</th>

                    <th className="px-2 py-2 text-md text-black-600 ">Puncte</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="">
                    <td className="px-2 py-4 text-md text-gray-500">1</td>
                    <td className="px-2 py-4">
                      <div className="text-md text-gray-900">
                       Obtinerea locului I-III la concursurile sportive <br />cultural-artistice, militare sau civile.<br />
                      </div>
                    </td>

                    <td className="px-2 py-4">
                      <a
                        href="#"
                        className="px-2 py-1 text-md text-white bg-green-500 rounded">
                        +10-20
                      </a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 py-4 text-md text-gray-500">2</td>
                    <td className="px-2 py-4">
                      <div className="text-md text-gray-900">
                     Participarea la sesiuni de comunicare stintiifice <br/>nationale-(n) si intenationale-(i)
                      </div>
                    </td>

                    <td className="px-2 py-4">
                      <a
                        href="#"
                        className="px-2 py-1 text-md text-white bg-green-500 rounded">
                        +10-(n)
                      </a> <a
                        href="#"
                        className="px-2 py-1 text-md text-white bg-green-500 rounded">
                        +20-(i)
                      </a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 py-4 text-md text-gray-500">...</td>
                    <td className="px-2 py-4">
                      <div className="text-md text-gray-900">...</div>
                    </td>

                    <td className="px-2 py-4">
                      <a
                        href="#"
                        className="px-2 py-1 text-md text-white bg-green-500 rounded">
                        ...
                      </a>
                      
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regulament;

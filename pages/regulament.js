
const Regulament = () =>{
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-4 ">
        <div className="flex flex-col ">
          <div className="w-full">
            <div className="border-b border-gray-300 shadow">
              <table>
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-2 py-2 text-md text-black-600 ">NR</th>

                    <th className="px-2 py-2 text-md text-black-600 ">
                      Regula
                    </th>

                    <th className="px-2 py-2 text-md text-black-600 ">
                      Puncte
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="">
                    <td className="px-2 py-4 text-md text-gray-500">1</td>
                    <td className="px-2 py-4">
                      <div className="text-md text-gray-900">
                        Barbierit Neconform
                      </div>
                    </td>

                    <td className="px-2 py-4">
                      <a
                        href="#"
                        className="px-2 py-1 text-md text-white bg-red-400 rounded">
                        -5
                      </a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 py-4 text-md text-gray-500">2</td>
                    <td className="px-2 py-4">
                      <div className="text-md text-gray-900">
                        Consum de Alcool sau alte Substante ilegale in
                        interiorul Uniatii
                      </div>
                    </td>

                    <td className="px-2 py-4">
                      <a
                        href="#"
                        className="px-2 py-1 text-md text-white bg-red-400 rounded">
                        -50
                      </a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 py-4 text-md text-gray-500">3</td>
                    <td className="px-2 py-4">
                      <div className="text-md text-gray-900">
                        Efectuare platonului in tinuta neconforma
                      </div>
                    </td>

                    <td className="px-2 py-4">
                      <a
                        href="#"
                        className="px-2 py-1 text-md text-white bg-red-400 rounded">
                        -10
                      </a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 py-4 text-md text-gray-500">4</td>
                    <td className="px-2 py-4">
                      <div className="text-md text-gray-900">
                        Locul I la Diferite competitii
                      </div>
                    </td>

                    <td className="px-2 py-4">
                      <a
                        href="#"
                        className="px-2 py-1 text-md text-white bg-green-500 rounded">
                        +20
                      </a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 py-4 text-md text-gray-500">5</td>
                    <td className="px-2 py-4">
                      <div className="text-md text-gray-900">
                        Efectuare platonului in tinuta neconforma
                      </div>
                    </td>

                    <td className="px-2 py-4">
                      <a
                        href="#"
                        className="px-2 py-1 text-md text-white bg-green-500 rounded">
                        +10
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
                      <a
                        href="#"
                        className="px-2 py-1 text-md text-white bg-red-400 rounded">
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
}

export default Regulament 
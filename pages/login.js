import Head from 'next/head';
import useSWR from 'swr';
import Layout from '../components/layout';
export default function Login() {
  return (
    <div>
      <div>
        <Head>
          <title>Welcome to Next.js!</title>
        </Head>
      </div>
      <Layout>
        <div class="flex justify-center pt-3 px-0">
          <div class="w-11/12 p-5 bg-white sm:w-11/12 md:w-3/4 lg:w-8/12">
            <h1 class="text-xl text-center pb-3 font-semibold">
              Hello there 👋
            </h1>
            <form class="mt-6">
              
              <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                // name="email"
                // valu={email}
                placeholder="john.doe@company.com"
                autocomplete="email"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <label
                for="password"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              
              <button
                href="/registeruser"
                type="submit"
                class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                Login
              </button>
              <a
                href="/registeruser"
                class="text-xl flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
                Nu ai cont ? - Inregistrare
              </a>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

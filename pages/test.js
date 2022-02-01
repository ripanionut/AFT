import Head from "next/head";
import useSWR from "swr";

import Script from "next/script";

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "http://worldtimeapi.org/api/timezone/Europe/Bucharest",
    fetcher
  );
 
  if (error) return <div>failed to load</div>;
  if (!data) return <div></div>;
  const d = data.datetime;
  return (
    <div>
      <Head>
        <title>Welcome to Next.js!</title>
      </Head>
      {d}
      <br></br>
      {Math.floor(Math.random() * 100)}
      <br></br>
      
    </div>
  );
}

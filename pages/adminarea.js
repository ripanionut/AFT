import Head from 'next/head';
import Link from 'next/link';

export default function AdminArea() {
  return (
    <div >
     

      <h1 className="m-5 text-2xl">Nu ai drept de administrator</h1>
      <Link href="/">
      <a  className="mx-5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
        Go back
      </a>
      </Link>
    </div>
  );
}

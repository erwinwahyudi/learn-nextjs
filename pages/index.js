import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
        <h2 className="mb-5 text-3xl font-semibold">
          Welcome to <span className="text-blue-600">Next.Js</span> with
          tailwindcss
        </h2>
        <p>Lorem ipsum dolor sit amet</p>
        <hr className="my-6 border-gray-300" />
        <p>Lorem ipsum dolor sit amet</p>

        <button
          type="button"
          className="inline-block px-6 py-2.5 mt-4 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-0active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Learn More
        </button>
    </div>
  );
}

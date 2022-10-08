import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="m-6 p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
        <h2 className="font-semibold text-3xl mb-5">
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
    </div>
  );
}

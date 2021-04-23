import Head from "next/head";
import { useEffect, useState } from "react";
import getRandomUsers from "../utils/fakeGenerator";

export default function Home() {
  const [randomList, setRandomList] = useState([]);
  const [amount, setAmount] = useState(0);

  const onClickHandler = () => {
    amount > 0
      ? setRandomList(getRandomUsers(amount))
      : alert("INSERT ANY AMOUNT");

  };

  const onInputHandler = (evt) => {
    setAmount(evt.target.value);
  };

  return (
    <div className="grid justify-items-center">
      <Head>
        <title>Random User Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative my-14 h-screen max-h-full">
        <p className="font-sans text-7xl font-bold text-white top-0 black-light">
          RANDOM FAKE USERS GENERATOR
        </p>
        <div className="h-40 w-full bg-gray-800">
          <input type="number" onChange={onInputHandler} />
          <button onClick={onClickHandler}>BUSCAR</button>
        </div>

      </main>

      <footer className="text-white h-16 w-screen grid place-items-center">
        <a
          href="https://github.com/DeadBryam"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by&nbsp; <strong>DeadBryam</strong>
        </a>
      </footer>
    </div>
  );
}

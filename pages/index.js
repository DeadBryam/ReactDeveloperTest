import Head from "next/head";
import { useEffect, useState } from "react";
import CheckboxFilter from "../components/RandomUsers/CheckboxFilter";
import DataTable from "../components/RandomUsers/DataTable";
import GenerateListButton from "../components/RandomUsers/GenerateListButton";

import getRandomUsers from "../utils/fakeGenerator";

export default function Home() {
  const _checkboxlList = [
    {
      name: "NAME",
      isChecked: true,
    },
    {
      name: "AGE",
      isChecked: true,
    },
    {
      name: "EMAIL",
      isChecked: true,
    },
    {
      name: "USERNAME",
      isChecked: true,
    },
    {
      name: "PASSWORD",
      isChecked: true,
    },
    {
      name: "ADDRESS",
      isChecked: true,
    },
    {
      name: "PHONE",
      isChecked: true,
    },
  ];

  const [randomList, setRandomList] = useState([]);
  const [amount, setAmount] = useState(0);
  const [checkboxList, setCheckboxList] = useState(_checkboxlList);
  
  const onClickGenerateHandler = () => {
    amount > 0
      ? setRandomList(getRandomUsers(amount))
      : alert("INSERT ANY AMOUNT");
  };

  const onCheckboxChange = (evt) => {
    let temp = checkboxList;
    temp[evt.target.id].isChecked = evt.target.checked;
    setCheckboxList([...temp]);
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

      <main className="relative my-16 max-h-full">
        <p className="font-sans text-7xl font-bold text-white top-0 black-light my-5 text-center">
          RANDOM FAKE USERS GENERATOR
        </p>
        <div className="h-40 w-full bg-gray-800 flex">
          <GenerateListButton
            onClickHandler={onClickGenerateHandler}
            onInputHandler={onInputHandler}
          />
          <CheckboxFilter checkboxList={checkboxList} onCheckboxChange={onCheckboxChange}/>
        </div>
        {randomList.length > 0 && (
          <DataTable data={randomList} filter={checkboxList} />
        )}

      </main>

      <footer className="text-white h-10 w-screen grid place-items-center fixed bottom-0 bg-gray-900">
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

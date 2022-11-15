import React, { useEffect, useState } from "react";
import { BsSearch, BsYoutube } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Header() {
  const { keyword } = useParams();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`videos/${search}`);
  };
  const handleChange = (e) => {
    const search = e.target.value;
    setSearch(search);
  };
  useEffect(() => {
    console.log(keyword);
    setSearch(keyword || "");
  }, [keyword]);
  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <h1 className='flex items-center'>
        <BsYoutube className='text-4xl text-brand' />
        <Link to='/' className='font-bold ml-2 text-3xl'>
          YOUTUBE
        </Link>
      </h1>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-7/12 p-2 outline-none bg-black text-gray-50'
          type='text'
          placeholder='search for..'
          onChange={handleChange}
          value={search}
        />
        <button className='bg-zinc-600 px-4' type='button'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}

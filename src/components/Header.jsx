import React, { useEffect, useState } from "react";
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
    const value = e.target.value;
    setSearch(value);
  };
  useEffect(() => {
    setSearch(keyword || "");
  }, [keyword]);
  return (
    <header>
      <h1>
        <Link to='/'>YOUTUBE</Link>
      </h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='search for..' onChange={handleChange} />
        <button type='button'>search</button>
      </form>
    </header>
  );
}

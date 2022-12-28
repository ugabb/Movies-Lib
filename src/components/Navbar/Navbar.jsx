import { Link, useNavigate } from "react-router-dom";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";

import "./Navbar.css";
import { useState } from "react";

import OpenedMenu from "./OpenedMenu";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    console.log(search);
    // add to url
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  const [menuStatus, setMenuStatus] = useState(false);

  const handleMenu = () => {
    setMenuStatus((prevMenu) => !prevMenu);
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> Movies Lib
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>

        <div className="menu" onClick={handleMenu}>
          {menuStatus ? <VscClose /> : <FiMenu />}
        </div>
        <div onClick={handleMenu}>{menuStatus ? <OpenedMenu /> : ""}</div>
      </form>
    </nav>
  );
};

export default Navbar;

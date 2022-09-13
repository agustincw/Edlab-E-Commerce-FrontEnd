import { useState } from "react";

import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

// EN PRUEBA
const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const searchOnChange = (e) => {
    setSearchInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault()
    navigate(`/products/search/${searchInput}`);
    
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="buscar">
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={searchOnChange}
            required
          />
          <div className="btn">
            <SearchIcon />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;

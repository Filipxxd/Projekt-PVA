import { FaSearch } from "react-icons/fa";
export default function SearchBar() {
  return (
    <span className="searchBar">
      <input type="text" placeholder="Hledaný výraz" />
      <FaSearch />
    </span>
  );
}

import { FaSearch } from "react-icons/fa";
import Button from "@mui/material/Button";
const SearchBox = () => {
  return (
    <div className="headersearch mx-3 me-3">
      <input type="text" placeholder="Search for Product" />
      <Button>
        <FaSearch />
      </Button>
    </div>
  );
};
export default SearchBox;

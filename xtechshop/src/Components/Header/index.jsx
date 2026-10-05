import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import CountryDropdown from "../CountryDropdown";
import Button from "@mui/material/Button";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import {useContext} from "react";
import {myContext} from "../../App";

const Header = () => {

  const context = useContext(myContext);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-dark-hourse-blood">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>COVID 19</b> epidemic, orders may be with slight
              delay!
            </p>
          </div>
        </div>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">

              {
                context.countryList.length!==0 && <CountryDropdown />
              }
                {/* (/* header search starts here */}
                <SearchBox />
                {/* /* header search ends here* */}

                <div className="part3 d-flex align-items-center mx-auto">
                  <Button className="circle me-3">
                    <FiUser />
                  </Button>
                  <div className="mx-auto cartTap d-flex align-items-center">
                    <span className="price"> ₦50.25</span>
                    <div className="position-relative mx-2">
                      <Button className="circle">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* navigation section starts here */}
        <Navigation />
        {/* navigation section starts here */}
      </div>
    </>
  );
};
export default Header;

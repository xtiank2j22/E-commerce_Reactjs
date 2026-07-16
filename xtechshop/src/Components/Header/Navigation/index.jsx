import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { GiHairStrands } from "react-icons/gi";
import { FiTv } from "react-icons/fi";
import { GiSlicedBread } from "react-icons/gi";
import { RiBloggerLine } from "react-icons/ri";
import { MdOutlineConnectWithoutContact } from "react-icons/md";



const Navigation = () => {
    return (
          <nav>
          <div className="container">
            <div className="row">
              <div className="col-sm-2 navpart1">
                <Button className="allCatTab align-items-center">
                <span className="icon1 me-2"><IoIosMenu /></span>
                  <span className="text">All Categories</span>
                  <span className="icon2 mx-2"><FaAngleDown /></span>
                </Button>
              </div>
              <div className="col-sm-10 navpart2 d-flex align-items-center">
                <ul className="list list-inline mx-auto">
                    <li className="list-inline-item"><Link to="/">Home</Link></li>
                    <li className="list-inline-item"><Link to="/">Shop</Link></li>
                    <li className="list-inline-item"><Link to="/"><GiHairStrands />&nbsp; Hair&Wigs</Link></li>
                    <li className="list-inline-item"><Link to="/"><FiTv /> &nbsp; Electronic</Link></li>
                    <li className="list-inline-item"><Link to="/"><GiSlicedBread /> &nbsp; Grocery</Link></li>
                    <li className="list-inline-item"><Link to="/"><RiBloggerLine /> &nbsp; Blog</Link></li>
                    <li className="list-inline-item"><Link to="/"><MdOutlineConnectWithoutContact /> &nbsp; Contact</Link></li>
           
                </ul>
              </div>
            </div>
          </div>
        </nav>
    )
}
export default Navigation
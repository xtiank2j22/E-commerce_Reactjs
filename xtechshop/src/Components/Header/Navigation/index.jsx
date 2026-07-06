import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
const Navigation = () => {
    return (
          <nav>
          <div className="container">
            <div className="row">
              <div className="col-sm-3 navpart1">
                <Button className="allCatTab">
                <span><IoIosMenu /></span>
                  <span className="text">All Categories</span>
                  <span><FaAngleDown /></span>
                  <span><FaAngleUp /></span>
                </Button>
              </div>
              <div className="col-sm-9 navpart1"></div>
            </div>
          </div>
        </nav>
    )
}
export default Navigation
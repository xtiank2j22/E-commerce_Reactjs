import React, { useState, useEffect, useContext, } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { myContext } from "../../App";
import Slide from "@mui/material/Slide";

// to display the modal transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// to display the modal transition ends here

const CountryDropdown = () => {
  // to display the modal
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedTab, setselectedTab] = useState(null);

  const [countryList, setcountryList] = useState([]);

  const context = useContext(myContext);

  const selectCountry = (index, country) => {
    setselectedTab(index);
    setisOpenModal(false);
    context.setselectedCountry(country);
  };

  useEffect(() => {
    setcountryList(context.countryList);
  }, []);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setcountryList(list);
    } else {
      setcountryList(context.countryList);
    }
  };
  // to display the modal ends here
  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{context.selectedCountry!=="" ? context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+ "..." : context.selectedCountry :
          'select Location'}</span>
        </div>
        <span className=" angle_cont justify-content-end">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        className="locationModel1"
        onClose={() => setisOpenModal(false)}
        slots={{
          transition: Transition,
        }}
      >
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area..</p>
        <Button className="close_" onClick={() => setisOpenModal(false)}>
          <MdClose />
        </Button>

        <div className="headersearch w-100">
          <input
            type="text"
            placeholder="Search your area"
            onChange={filterList}
          />
          <Button>
            <FaSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index,item.country)}
                    className={`${selectedTab === index ? "active" : ""}`}
                  >{item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;

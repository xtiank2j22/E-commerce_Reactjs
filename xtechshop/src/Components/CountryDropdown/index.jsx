import React from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from '@mui/material/Slide';

// to display the modal transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// to display the modal transition ends here

const CountryDropdown = () => {
// to display the modal
  const [isOpenModal, setisOpenModal] = useState(false);
// to display the modal ends here
  return (
    <>
      <Button className="countryDrop" onClick={()=>setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">Nigeria</span>
        </div>
        <span className=" angle_cont justify-content-end">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog open={isOpenModal} className="locationModel1" onClick={()=>setisOpenModal(false)} 
        slots={{
          transition: Transition,
        }}>
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area..</p>
        <Button className="close_" onClick={()=>setisOpenModal(false)}><MdClose /></Button>

          <div className="headersearch w-100">
            <input type="text" placeholder="Search your area" />
            <Button><FaSearch /></Button>
          </div>
        <ul className="countryList mt-3">
          <li><Button onClick={()=>setisOpenModal(false)}>nigeria</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Biafra</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Spain</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Agentina</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>USA</Button></li>
           <li><Button onClick={()=>setisOpenModal(false)}>Nigeria</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Biafra</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Spain</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Agentina</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>USA</Button></li>
           <li><Button onClick={()=>setisOpenModal(false)}>Nigeria</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Biafra</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Spain</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Agentina</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>USA</Button></li>
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;

import "./App.css";
import "bootstrap-4-react/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState,} from "react";
import axios from "axios";

// to create the api for country
const myContext = createContext();

function App() {

  const [countryList,setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');

  useEffect(() =>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) =>{
      setCountryList(res.data.data);
    })
  }

  const values = {
    countryList,
    setselectedCountry,
    selectedCountry
  }
//api stoped here
  return (
    <BrowserRouter>
      {/*values is been passed to the context provider*/}
      <myContext.Provider value={values}> 
      {/*values is been passed to the context provider ends here*/}
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {myContext};

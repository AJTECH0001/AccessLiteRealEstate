import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/Hero/Hero';

import Properties from "./Components/Properties/Properties";
import My_Properties from "./Components/My_Properties/My_Properties";
import Transactions from "./Components/Transactions/Transactions";
import Footer from "./Components/Footer/Footer";
import PropertyDetails from "./Components/propertydetails/propertydetails";
import PropertyPage from "./Components/propertypage/propertypage";
import Services from "./Components/Services/Services"
import About from "./Components/About/About";
import p1 from "./img/Img-Apart-1/p1.png"
import p2 from "./img/Img-Apart-1/p2.png"
import p3 from "./img/Img-Apart-1/p3.png"
import p4 from "./img/Img-Apart-1/p4.png"
import p5 from "./img/Img-Apart-1/p5.png"
import p6 from "./img/Img-Apart-1/p6.png"
import propertyImage1 from "./img/property-1.jpg"
import propertyImage2 from "./img/property-2.jpg"


import { useState, useEffect } from "react";

function App() {

  const [propertiesData, setProperties] = useState([]);

  useEffect(() => {

    const fetchedProperties = [

      {
        id: 1,
        name: "Property 1",
        price: 100000,

        additionalImages: [p1, p2, p3],
        returnPerTokenPerYear: 500,
        rentalAmount: 2000,
        description: "Description for Property 1"
      },
      {
        id: 2,
        name: "Property 2",
        price: 150000,

        additionalImages: [p4, p5],
        returnPerTokenPerYear: 600,
        rentalAmount: 2500,
        description: "Description for Property 2"
      },
      {
        id: 3,
        name: "Property 3",
        price: 200000,

        additionalImages: [p6],
        returnPerTokenPerYear: 800,
        rentalAmount: 3000,
        description: "Description for Property 3"
      }

      // { id: 1, name: "Property 1", price: 100000, description: "Description 1", additionalImage: [p1, p2] },
    ];
    setProperties(fetchedProperties);
  }, []);

  const [state, setState] = useState({
    web3: null,
    contract: null,
  });

  const saveState = (state) => {
    console.log(state);
    setState(state);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar saveState={saveState} />
        <Routes>
          <Route path="/" element={<Hero state={state} />} />


          <Route path="transactions">
            <Route path=":userId" element={<Transactions state={state} />} />
          </Route>
          <Route path="/properties" element={<Properties state={state} />} />
          <Route path="/About" element={<About state={state} />} />
          <Route path="/Services" element={<Services state={state} />} />
          <Route path="/my_properties" element={<My_Properties state={state} />} />

          <Route path="/properties/:id" element={<PropertyDetails properties={propertiesData} />
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;

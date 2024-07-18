import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Properties from "../Properties/Properties";
// import { FaHouseChimneyWindow } from "react-icons/fa";
import Apartment from "../Properties/cards/apartment";

function Hero({ state }) {
  const [Property, setProperty] = useState("");
  const getData = async () => {
    const { contract } = state;
    const AllAvailableProperties = await contract.methods
      .getAllAvailableProperties()
      .call();
    setProperty(AllAvailableProperties);
    console.log(AllAvailableProperties);
  };

  const Buy = async (id, value) => {
    const { contract, web3 } = state;
    const accounts = await web3.eth.getAccounts();
    await contract.methods
      .buyProperty(Number(id))
      .send({ from: accounts[0], value: value, gas: 480000 });
  }

  useEffect(() => {
    getData();
  }, [state]);
  return (
    <>
   
      <div className="container-fluid  header bg-white p-0">
        <div className="row g-0 align-items-center h-100 vh-100 flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5  mt-lg-5">
            <h1 className="display-5 animated fadeIn mb-4 mt-5">
              Welcome to <span className="text-secondary">AccessLite</span> Real Estate Dapp
            </h1>
            <p className="animated fadeIn mb-4 pb-2">
              Here , We make real estate investment meets innovation. Invest in prime properties through tokenization and become a fractional owner today! <br />
              Join the future of property investment with <span className="text-secondary">AccessLite</span>.
            </p>
            <a
              href=""
              className="btn btn-secondary py-3 px-5 me-3 animated fadeIn"
            >
              Get Started
            </a>
          </div>
          <div className="col-md-6 animated fadeIn ">
            <div className="">
              <img
                className="img-fluid"
                src={"./src/img/p17.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

{/* Container */}
      <div class="container-xxl py-5  about bg-white">
        <div class="container">
          <div class="row g-5 align-items-center ">
            <div class="col-lg-6 fadeIn">
              <div class=" position-relative overflow-hidden p-5 pe-0">
                <img class="img-fluid w-100" src={"./src/img/Img-Apart-1/p6.png"} />
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 class="mb-4">Places To Find The Perfect Property</h1>
              <p class="mb-4">
                {/* Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet */}
                We have got numerous places of your choice coupled with beautiful apartments. Also, we work with your budget. There is always a fractional or full token available after aquisition. Our services extends too
              </p>
              <p>
                <i class="fa fa-check text-secondary me-3"></i> Africa includes Nigeria , South Africa and Cape vade
                
              </p>
              <p>
                <i class="fa fa-check text-secondary me-3"></i> Europe includes London , Derby , Manchester and Leiceister City
              </p>
              <p>
                <i class="fa fa-check text-secondary me-3"></i> North America includes New york, Carlifonia , Texas and Maine 
              </p>
              <a class="btn btn-secondary py-3 px-5 mt-3" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <Apartment />
      <div className="container-fluid bg-white">
        <div class="col-12 text-center bg-white">
          <Link class="btn btn-secondary py-3 px-5" to="/properties">
            Browse More Property
          </Link>
        </div>
      </div>

    </>
  );
}

export default Hero;

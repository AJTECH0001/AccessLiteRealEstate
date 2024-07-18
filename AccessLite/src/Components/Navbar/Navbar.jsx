import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ABI from "./ABI.json";
import Web3 from "web3";
import { FaHandshake } from "react-icons/fa";
import { ConnectButton } from "@rainbow-me/rainbowkit";


// import './Navbar.css'; // 

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`go-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      Go to Top
    </button>
  );
};

function Navbar({ saveState }) {
  const [connected, setConnected] = useState(true);

  const init = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const contract = new web3.eth.Contract(
        ABI,
        "0x85f7c2Ddb1EFF336790C66992b402Be84F0c2017"
      );
      saveState({ web3: web3, contract: contract });
      setConnected(false);
      console.log(contract);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid nav-bar bg-transparent ">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center text-center"
        >
          <div className="icon p-2 me-2">
            <FaHandshake className="img--secondary" />
          </div>
          <h1 className="m-0 text-secondary">AccessLite</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-item nav-link active text-secondary">
              Home
            </Link>
            <Link to="/properties" className="nav-item nav-link">
              Explore
            </Link>
            <Link to="/my_properties" className="nav-item nav-link">
              My Property
            </Link>

          </div>
          
          <ConnectButton  />
          {/* <button
            className="btn btn-secondary px-3 d-none d-lg-flex"
            onClick={init}
            disabled={!connected}
          >
            {connected ? "Connect Metamask" : "Connected"}
          </button> */}
        </div>
      </nav>
      <GoToTopButton />
    </div>
  );
}

export default Navbar;

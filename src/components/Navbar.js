import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [number, setNumber] = useState(2021);
  return (
    <>
      <nav id="res">
        <div className="pagination">

          <li className="page-item"><Link onClick={() => setNumber(2017)} to="/alumni_2017" className="page-link" id="hov1" style={
            number === 2017
              ? {
                backgroundColor: "#1389d5",
                color: "white",
                borderColor: "#1389d5",
              }
              : {}
          } >2017</Link></li>
          <li className="page-item"><Link onClick={() => setNumber(2018)} to="/alumni_2018" className="page-link" id="hov2" style={
            number === 2018
              ? {
                backgroundColor: "#1389d5",
                color: "white",
                borderColor: "#1389d5",
              }
              : {}
          }>2018</Link></li>

          <li className="page-item"><Link onClick={() => setNumber(2019)} to="/alumni_2019" className="page-link" id="hov3" style={
            number === 2019
              ? {
                backgroundColor: "#1389d5",
                color: "white",
                borderColor: "#1389d5",
              }
              : {}
          }>2019</Link></li>
          <li className="page-item"><Link onClick={() => setNumber(2020)} to="/alumni_2020" className="page-link" id="hov4" style={
            number === 2020
              ? {
                backgroundColor: "#1389d5",
                color: "white",
                borderColor: "#1389d5",
              }
              : {}
          }>2020</Link></li>
          <li className="page-item"><Link onClick={() => setNumber(2021)} to="/alumni_2021" className="page-link" id="hov5" style={
            number === 2021
              ? {
                backgroundColor: "#1389d5",
                color: "white",
                borderColor: "#1389d5",
              }
              : {}
          }>2021</Link></li>


        </div>
      </nav>
    </>
  );
};

export default Navbar;
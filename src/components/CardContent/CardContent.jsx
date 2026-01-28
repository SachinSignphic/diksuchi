import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CardContent.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const CardContent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="work-top-left">
        <img
          src="left-arrow.png"
          alt="Back"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate("/");
              window.scrollTo({ top: 0 });
            }
          }}
        />
        <h1>GOWTHAM REDDY RESIDENCY</h1>
      </div>
      <div className="card-head">
        <p>202<span>5</span></p>
        <p>Interiors</p>
      </div>
      <div className="card-mid">
        <div className="card-mid-left">
          <img src="/diksuchi portfolio_page-0014.png"/>
          <p>FLOOR PLAN</p>
        </div>
        <div className="card-mid-right">
          <div className="legend-left">
            <p>1.DRAWING ROOM</p>
            <p>2.LIVING ROOM</p>
            <p>3.DINING</p>
            <p>4.POOJA</p>
            <p>5.KITCHEN</p>
            <p>6.WASH AREA</p>
            <p>7.MASTER BEDROOM</p>
            <p>8.DRESSING ROOM</p>
            <p>9.TOILET</p>
            <p>10.CHILDREN BEDROOM</p>
            <p>11.TOILET</p>
          </div>
          <div className="legend-right">
            <p>12.DRESSING</p>
            <p>13.BEDROOM 1</p>
            <p>14.TOILET</p>
            <p>15.POWDER ROOM</p>
            <p>16.BEDROOM 2</p>
            <p>17.TOILET</p>
            <p>18.DRESS</p>
            <p>19.SITOUT</p>
            <p>20.SERVANT ROOM</p>
            <p>21.TOILET</p>
          </div>
        </div>
      </div>
      <div className="collage">
        <img className="img img-1" src="/Frame 126.png" />
        <img className="img img-2" src="/Frame 127.png" />
        <img className="img img-3" src="/Frame 128.png" />
        <img className="img img-4" src="/Frame 129.png" />
        <img className="img img-5" src="/Frame 130.png" />
        <img className="img img-6" src="/Frame 131.png" />
      </div>
      <Footer />
    </>
  );
}
export default CardContent;
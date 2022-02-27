import { CgLogIn } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { GrCart } from "react-icons/gr";
import { useState } from "react";
import "./Navbar.scss";


import {
  BuildAndSetsLinks,
  CollectionsLinks,
  CustomizeLinks,
  DrinkwareLinks,
  FanshopLinks,
} from "../../data/navLinks";
import { Link, useNavigate } from "react-router-dom";

// console.log(Link)

export const Navbar = () => {
  const navTo = useNavigate()
  const [state, setState] = useState(false);
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);
  const [display5, setDisplay5] = useState(false);
  return (
    <div className="navbar">
      {/* first div */}
      <div
        onMouseOver={() => {
          setState(false);
        }}
      >
        <div>
          <CgLogIn />
          Login
        </div>

        <div onClick={()=>{
          navTo("/")
        }} >
          <img
            src="https://www.tervis.com/on/demandware.static/-/Sites/default/dw4eec0c99/images/tervis-logo.svg"
            alt=""
          />
        </div>
        {/*  */}
        <div>
          <div>
            <input placeholder="Search" type="search" />
            <div className="search-icon">
              <BiSearch />
            </div>
          </div>

          <div>
            <p>5</p>
            <GrCart className="GrCart" />
          </div>
        </div>
      </div>

      {/* second div */}
      <div>
        <div>
          <p
            onMouseOver={() => {
              setState(true);
              setDisplay1(true);
              setDisplay2(false);
              setDisplay3(false);
              setDisplay4(false);
              setDisplay5(false);
            }}
          >
            Drinkware
          </p>

          <p
            onMouseOver={() => {
              setState(true);
              setDisplay1(false);
              setDisplay2(true);
              setDisplay3(false);
              setDisplay4(false);
              setDisplay5(false);
            }}
          >
            Collections
          </p>

          <p
            onMouseOver={() => {
              setState(true);
              setDisplay1(false);
              setDisplay2(false);
              setDisplay3(true);
              setDisplay4(false);
              setDisplay5(false);
            }}
          >
            Fan Shop
          </p>

          <p
            onMouseOver={() => {
              setState(true);
              setDisplay1(false);
              setDisplay2(false);
              setDisplay3(false);
              setDisplay4(true);
              setDisplay5(false);
            }}
          >
            Customize
          </p>

          <p
            onMouseOver={() => {
              setState(true);
              setDisplay1(false);
              setDisplay2(false);
              setDisplay3(false);
              setDisplay4(false);
              setDisplay5(true);
            }}
          >
            Bundles & Sets
          </p>

          <p
            onMouseOver={() => {
              setState(true);
              setDisplay1(false);
              setDisplay2(false);
              setDisplay3(false);
              setDisplay4(false);
              setDisplay5(false);
            }}
          >
            Sustainability
          </p>
        </div>
      </div>
      {/* third div */}
      {/* hover div  */}

      <div
        onMouseOut={() => {
          setState(false);
        }}
        className={state ? "show" : "dontShow"}
      >
        <div
          onMouseOver={() => {
            setState(true);
          }}
        >
          {/* left div */}
          <div>
            <img
              className={display1 ? "one" : "zero"}
              src="https://marvel-b1-cdn.bc0a.com/f00000000077703/www.tervis.com/on/demandware.static/-/Sites-Tervis-Library/default/dw1ddf08e5/images/mega-menu/mm-drinkware-010522.jpg"
              alt=""
            />
            <img
              className={display2 ? "one" : "zero"}
              src="https://marvel-b1-cdn.bc0a.com/f00000000077703/www.tervis.com/on/demandware.static/-/Sites-Tervis-Library/default/dw63e44862/images/mega-menu/mm-collections-010522.jpg"
              alt=""
            />
            <img
              style={{ backgroundColor: "#007db6" }}
              className={display3 ? "one" : "zero"}
              src="https://www.tervis.com/on/demandware.static/-/Sites-Tervis-Library/default/dw36c0f893/images/mega-menu/fanshop-mark.svg"
              alt=""
            />
            <img
              style={{ backgroundColor: "#015c94" }}
              className={display4 ? "one" : "zero"}
              src="https://www.tervis.com/on/demandware.static/-/Sites-Tervis-Library/default/dwbd7d9d02/images/create/customyzer-logo-white.svg"
              alt=""
            />

            <img
              style={{ objectFit: "cover" }}
              className={display5 ? "one" : "zero"}
              src="https://www.tervis.com/on/demandware.static/-/Sites-Tervis-Library/default/dw63f9a3e8/images/mega-menu/mm-bundles-background@2x.jpg"
              alt=""
            />
          </div>
          {/* right div */}
          <div>
            {DrinkwareLinks.map((item) => {
              return (
                <div to="/products" onClick={()=>{
                  setState(false)
                  navTo("/products")
                }} className={display1 ? "productsLinks" : "hide"}>
                  <img src={item.itemImg} alt="" />
                  <h5 >{item.itemTitle}</h5>
                </div>
              );
            })}

            {CollectionsLinks.map((item) => {
              return (
                <div to="/products" onClick={()=>{
                  setState(false)
                  navTo("/products")
                }} className={display2 ? "productsLinks" : "hide"}>
                  <img src={item.itemImg} alt="" />
                  <h5>{item.itemTitle}</h5>
                </div>
              );
            })}

            {FanshopLinks.map((item) => {
              return (
                <div to="/products" onClick={()=>{
                  setState(false)
                  navTo("/products")
                }} className={display3 ? "productsLinks" : "hide"}>
                  <img src={item.itemImg} alt="" />
                  <h5>{item.itemTitle}</h5>
                </div>
              );
            })}

            {CustomizeLinks.map((item) => {
              return (
                <div to="/products" onClick={()=>{
                  setState(false)
                  navTo("/products")
                }} className={display4 ? "productsLinks" : "hide"}>
                  <img src={item.itemImg} alt="" />
                  <h5>{item.itemTitle}</h5>
                </div>
              );
            })}

            {BuildAndSetsLinks.map((item) => {
              return (
                <div to="/products" onClick={()=>{
                  setState(false)
                  navTo("/products")
                }}  className={display5 ? "productsLinks" : "hide"}>
                  <img src={item.itemImg} alt="" />
                  <h5>{item.itemTitle}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

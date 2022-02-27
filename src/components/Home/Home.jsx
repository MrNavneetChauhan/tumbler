import React from "react";
import "./Home.css";
import Img from "./Image/1.webp";

import Spclassic from "./Image/sp-classic-030121.webp";
import Satinless from "./Image/sp-stainless-030121.webp";
import Cystomyzer from "./Image/sp-customyzer-030121.webp";
import Kalmalogo from "./Image/klarna-logo-pink.svg";
import Bettyimage from "./Image/011722-betty-feature.webp";
import Terviscustomyer from "./Image/create-010322.webp";
import Createinfoimg from "./Image/create-info-010322.webp";
import Everythingtervisimgright from "./Image/hpg-sustainability-032620.webp";
import Everythingstervisleft from "./Image/hpg-heritage-032620.webp";
import Slider from "./Slider";

const Home = () => {
  return (
    // Main Div
    <div className="main-div-section">
      {/* From here Top Image and Text shop now tag */}
      <div className="main-div-top">
        <div className="leftside">
          <h4>Fill Your</h4>
          <h2>
            Mind <span className="dot"> &nbsp; .</span>
            <span className="bottle-cursive"> Bottle </span>
            <span className="dot"> . &nbsp;</span>
            <span>Soul</span>
          </h2>
          <p>
            Nourish your life by filling it with things to make the mind <br />
            calm, the body strong, and the soul free.
          </p>
          <button className="button-shop-now">Shop & Learn More</button>
        </div>

        <img className="rightside" src={Img} alt="" />
      </div>

      {/* Shop Classic page Start Here  */}
      <div className="shopclassic-main-div">
        <div className="shopclassic">
          <div>
            <img src={Spclassic} alt="" />
          </div>

          <div className="shopclassic-textdiv">
            <h2>Shop Classic</h2>
            <p>
              The drinkware that <br /> started it all.
            </p>
          </div>
        </div>

        <div className="shopclassic">
          <div>
            <img src={Satinless} alt="" />
          </div>

          <div className="shopclassic-textdiv">
            <h2>Shop Stainless</h2>
            <p>Bold and durable.</p>
          </div>
        </div>

        <div className="shopclassic">
          <div>
            <img src={Cystomyzer} alt="" />
          </div>

          <div className="shopclassic-textdiv">
            <h2>Customize Now</h2>
            <p>As unique as you.</p>
          </div>
        </div>
      </div>

      {/* Shop Classic Page End Here  */}

      {/* get More Time to pay Div Start Here  */}
      <div className="get-maore-time-pay">
        <div className="getmore-time-to-pay-text-div">
          <h2>
            Get more time to pay. to pay.&nbsp; <span>Learn More</span>
          </h2>
          <p>Split your purchase into 4 interest-free payments.</p>
        </div>

        <div className="klarna-div">
          <img src={Kalmalogo} alt="" />
        </div>
      </div>

      {/* get More Time to pay Div End Here  */}

      {/* Be Like Betty Div Start Here Home Page */}

      <div className="Betty-main-div">
        <img className="betty-div-left-side-img" src={Bettyimage} alt="" />

        <div className="betty-rightside-div">
          <div className="betty-rightside-text-div">
            <h2>Be Like Betty</h2>
            <p>in everything you do!</p>
            <p>
              For every <span>Be Like Betty tumbler</span>
              <br />
              and water bottle purchased*,
              <br />
              we'll donate $5 to the Morris Animal <br />
              Foundation Betty White Wildlife Fund.
            </p>

            <button className="betty-button-shop-now">Shop Now</button>
          </div>
        </div>
      </div>

      {/* Be Like Betty Div End Here Home Page */}

      {/* See Whats New and crousel div start here  */}
      <div className="see-whats-new-corolsaldiv">
        <h2>See What’s New</h2>
        <Slider />
      </div>
      {/* See Whats new crousel div end here */}

      {/* tervis Customizer below crousel div start here */}
      <div className="tervis-main-div">
        <img className="betty-div-left-side-img" src={Terviscustomyer} alt="" />

        <div className="create-betty-rightside-div">
          <img
            className="betty-div-right-side-img"
            src={Createinfoimg}
            alt=""
          />
          <div>
            <a href=" ">
              <button className="create-button-shop-templet">
                Shop from Scratch
              </button>
            </a>
            <a href=" ">
              <button className="create-button-shop-templet">
                Shop with a Templet
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* tervis Customyzer End here */}
      <div className="see-whats-new-corolsaldiv">
        <h2>Trending Now</h2>
        <Slider />
      </div>

      {/* Everything tervis start here */}
      <div className="everything-tervis-main-div">
        <img
          className="everything-tervis-div-left-side-img"
          src={Everythingstervisleft}
          alt=""
        />

        <div className="everything-tervis-rightside-div">
          <img
            className="betty-div-right-side-img"
            src={Everythingtervisimgright}
            alt=""
          />
        </div>
      </div>
      {/* Every things tervis end here */}
    </div>
  );
};

export default Home;

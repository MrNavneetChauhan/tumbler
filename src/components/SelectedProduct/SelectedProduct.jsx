import { StarBorder } from "@material-ui/icons";
import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import "./SelectedProduct.scss"
export const SelectedProduct = () => {
  const navTo = useNavigate();
    const {productDetails} = useContext(ProductContext);
    const [Image1,setImage1] = useState(true)
    const [Image2,setImage2] = useState(false)
    const [Image3,setImage3] = useState(false)
    const {itemBrandImg,itemDescription,itemImg,itemImgOne,itemImgTwo,itemName,itemOffer,itemOption,itemOptionType,itemPrice} = productDetails;
    console.log(productDetails)
  return (
    <div className="product-details">
      {/* first */}
      <div>
        <div>
          <p>New</p>
          <img className={Image1?"showing":"hiding"}
            src={itemImg}
            alt=""
          />
          <img className={Image2?"showing":"hiding"}  src={itemImgTwo} alt="" />
          <img className={Image3?"showing":"hiding"} src={itemImgOne} alt="" />
        </div>
        {/*  */}

        <div>
          <div>
            <img
              src={itemBrandImg}
              alt=""
            />
          </div>
          <h2>{itemName}</h2>
          <p>{itemOptionType}</p>
          <p>{itemOffer}</p>
          <div className="priceAndItem">
              <p>${itemPrice}</p>
              <p>Item No. 1408601</p>
          </div>
          <div>
              <p>4 interest-free payments of $4.74 with <b>Klarna</b>. <span>Learn more</span> </p>
          </div>

          <div>
              <div>
                  
            <StarBorder/>
            <StarBorder/>
            <StarBorder/>
            <StarBorder/>
            <StarBorder/>
              </div>

              <div>
                <p>No Reviews</p>
                <p>Write the first Review</p>
              </div>
          
          </div>

        <div>
          <p>Select Size: 16 oz Tumbler</p>
          <div>
            <div>
              <img onMouseOver={()=>{
              setImage1(true)
              setImage2(false)
              setImage3(false)
            }} style={{backgroundColor:"#b1b3b6"}} src="https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN&req=object&sharpen=1)$SPCL-CRSL$" alt="" />
            </div>
            
            <div onMouseOver={()=>{
              setImage1(false)
              setImage2(true)
              setImage3(false)
            }} >
              <img src="https://marvel-b1-cdn.bc0a.com/f00000000077703/www.tervis.com/on/demandware.static/Sites-Tervis-Site/-/default/dw10451c76/images/Preview_Image.png" alt="" />
            </div>
            <div onMouseOver={()=>{
              setImage1(false)
              setImage2(false)
              setImage3(true)
            }}>
              <img src="https://marvel-b1-cdn.bc0a.com/f00000000077703/www.tervis.com/on/demandware.static/-/Sites-Tervis-Library/default/dwc2380740/images/homepage/2021/sp-classic-030121.png" alt="" />
            </div>
          </div>
        </div>

        </div>


      </div>
      {/* second */}

      <div className="add-to-cart-div">

              {/* inside first div */}
            <div className="first" >
              <div className="inside-first" >+ $5.00</div>
              <div className="second" >
                <div className="inside-second-first" >ABC</div>
                <div className="inside-second-second" >Personalize</div>
              </div>
            </div>

              {/* inside second div */}
              <div className="first" >
              <div className="inside-first" >Qty <span className="qty">1</span> </div>
              <div className="second" >
                <div onClick={()=>{
                  navTo("/products/cart")
                }} className="inside-second-third">Add To Cart</div>
              </div>
            </div>

            {/* inside third div */}
            <div className="share-buttons">
              <div>
                <div>
                  <img src="https://www.tervis.com/on/demandware.static/Sites-Tervis-Site/-/default/v1645902081969/images/icon-share.svg" alt="" />
                </div>
                <div>Share it</div>
              </div>
              <div>
                <div>
                  <img src="https://www.tervis.com/on/demandware.static/Sites-Tervis-Site/-/default/v1645902081969/images/icon-save.svg" alt="" />
                </div>
                <div>Save it</div>
              </div>
            </div>

      </div>

      {/* product details */}
      <div className="product-details">
        <div>Product Details</div>
        <div>
          <p>{itemDescription}</p>
          <p style={{color:"teal"}}>{itemName}</p>
        </div>
      </div>

    </div>
  );
};

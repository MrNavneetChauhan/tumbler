import "./ProductsDisplay.scss"

import {Data} from "../../data/productData"
import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
import { useNavigate } from "react-router-dom"
export const ProductsDisplay = ()=>{

    const {selectedProductDetails} = useContext(ProductContext)
    const navTo = useNavigate()

    // console.log(selectedProductDetails)
    return (
        <div className="product-display">
            <div>
                <div>
                    <p>Classic Insulated Tumbler</p>
                    <h5>615 <span>Results</span></h5>
                    <div className="size-filter">
                        <select>
                            <option value="">Product Size</option>
                            <option value="">16 oz Tumbler</option>
                            <option value="">Mug</option>
                            <option value="">4 Packs</option>
                            <option value="">24 oz Tumbler</option>
                            <option value="">10 oz Wavy Tumbler</option>
                            <option value="">Water Bottle</option>
                            <option value="">2 Packs</option>
                        </select>

                        <select>
                            <option value="">Inner Color</option>
                            <option value="">Clear</option>
                            <option value="">Green</option>
                            <option value="">Red</option>
                            <option value="">Blue</option>
                            <option value="">Purple</option>

                            <option value="">Black</option>

                            <option value="">Orange</option>
                        </select>

                        <select>
                            <option value="">Brands</option>
                            <option value="">Disney</option>
                            <option value="">Mandalorian</option>
                            <option value="">Loving Plaid</option>
                            <option value="">Only Good Vibes</option>
                            <option value="">Kelly Ventura </option>
                            <option value="">Salt Life </option>
                            <option value="">Star Wars </option>
                            <option value="">Callie Danielle </option>
                            <option value="">Sara Berrenson</option>
                            <option value="">Sunflower Flyby</option>
                            <option value="">EttaVee</option>
                            <option value="">Inkreel </option>
                            <option value="">Warner Brothers</option>
                            <option value="">Simply Southern</option>

                        </select>
                    </div>
                    

                    
                </div>
                {/* second div box */}
                <div>
                    <label htmlFor="">Sort by</label>
                    <select>
                        <option value="featured">Featured</option>
                        <option value="bestsellers">Bestsellers</option>
                        <option value="newest">Newest Designs</option>
                        <option value="asc">Name A to Z</option>
                        <option value="desc">Name Z to A</option>
                    </select>
                </div>
            </div>
            {/* products div started */}
        
            <div>
            { Data.map((item)=>{
                return <div>
                    <div onClick={()=>{
                        selectedProductDetails(item)
                        navTo("/products/details")
                    }}>
                        <h5>New</h5>
                        <img  src={item.itemImg} alt="" />
                    </div>
                    <div>
                    <h4>{item.itemName}</h4>
                    <p>$ {item.itemPrice}</p>
                    <p>{item.itemAvail}</p>
                    </div>
  
                </div>
            }) }
            </div>
        
        </div>
    )
}
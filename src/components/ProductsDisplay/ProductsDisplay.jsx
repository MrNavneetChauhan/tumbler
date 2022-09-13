import "./ProductsDisplay.scss"

import {Data} from "../../data/productData"
import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
export const ProductsDisplay = ()=>{
    const [data,setData] = useState([])
    const {selectedProductDetails} = useContext(ProductContext);
    const navTo = useNavigate();

    useEffect(()=>{
        setData(Data)
    },[])

    const handleColor = (e)=>{
        let color = e.target.value;
        let filtered = Data.filter((item)=>item.color == color);
        setData([...filtered])

    }

    const handleSort = (e)=>{
        let target = e.target.value;
        if(target == "asc"){
          let x =   data.sort((a,b)=>{
                if(a.itemPrice < b.itemPrice){
                    return -1
                }else{
                    return 1
                }
            })

            setData([...x])
        }
        else if(target == "desc"){
          let x =  data.sort((a,b)=>{
                if(a.itemPrice > b.itemPrice){
                    return -1
                }else{
                    return 1
                }
            })
            setData([...x])
        }
    }

    const handleBrands = (e)=>{
        let brands = e.target.value;
        let filtered = Data.filter((item)=>item.itemName == brands);
        setData([...filtered])
    }

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

                        <select onChange={handleColor}>
                            <option value="">Inner Color</option>
                            <option value="blue">Blue</option>
                            <option value="yellow">Yellow</option>
                            <option value="pink">Pink</option>
                            <option value="sky-blue">Sky-Blue</option>
                            <option value="black">Black</option>

                            <option value="brinjal">Brinjal</option>

                            <option value="brown">Brown</option>

                            
                            <option value="maroon">Maroon</option>

                            
                        </select>

                        <select onChange={handleBrands}>
                            <option>Brands</option>
                            <option value="Disney® - Princess Group Hug">Disney</option>
                            <option value="Mandalorian - Grogu">Mandalorian</option>
                            <option value="Loving Plaid">Loving Plaid</option>
                            <option value="Only Good Vibes">Only Good Vibes</option>
                            <option value="Kelly Ventura - Heather Rose">Kelly Ventura </option>
                            <option value="Salt Life® - Lobster Dive">Salt Life </option>
                            <option value="Star Wars™ - R2D2 Icon">Star Wars </option>
                            <option value="Callie Danielle - Beach Biking">Callie Danielle </option>
                            <option value="Sara Berrenson - Scoops and Pops">Sara Berrenson</option>
                            <option value="Sunflower Flyby">Sunflower Flyby</option>
                            <option value="EttaVee You Can">EttaVee</option>
                            <option value="Inkreel - Island Hopping">Inkreel </option>
                            <option value="Warner Brothers - Tweety 80th Anniversary">Warner Brothers</option>
                            <option value="Simply Southern® - Havin' a Good Day">Simply Southern</option>

                        </select>
                    </div>
                    

                    
                </div>
                {/* second div box */}
                <div>
                    <label htmlFor="">Sort by</label>
                    <select onChange={handleSort}>
                        <option>Featured</option>
                        <option value="asc">Name A to Z</option>
                        <option value="desc">Name Z to A</option>
                    </select>
                </div>
            </div>
            {/* products div started */}
        
            <div>
            { data.map((item)=>{
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
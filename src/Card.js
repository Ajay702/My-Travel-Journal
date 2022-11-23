import React from "react";
import japan_img from "./japan.jpg";
import {BiLocationPlus} from "react-icons/bi";
import sydney_jpg from "./sydney.jpg"


export default function Card(){
    return(
        
        <main>
            <div >
            <img  className="pic" src = {japan_img}  />


            <div className="first">

                <h3 className="japan-location">
                    <BiLocationPlus/> JAPAN
                </h3>

                <h2 className="japan-heading">
                    MOUNT FUJI
                </h2>
                <p>
                        <b>
                            12 Jan, 2021 - 24 Jan, 2021
                        </b>
                        
                        <br></br>
    
                Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>


            </div>

            
 
            </div>

            &nbsp;

            <div>
            <img  className="pic2" src = {sydney_jpg}  />


            <div className="second">

                <h3 className="sydney-location">
                    <BiLocationPlus/> AUSTRALIA
                </h3>

                <h2 className="sydney-heading">
                    Sydney Opera House
                </h2>
                <p      >
                        <b>
                            27 May, 2021 - 25 Dec, 2021
                        </b>

                        <br></br>

                        The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings
                </p>

                

            </div>
 
            </div>

            
            
            

        </main>
    )
}
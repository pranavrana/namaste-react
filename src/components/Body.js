import { useState } from "react";
import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

// const filterRes = () => {
//     setListRes(resObj.filter(res => resObj.info.avgRating > 4))
// }

const Body = () => {
    const [listRes, setListRes] = useState(resObj);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => setListRes(listRes.filter(res => res.info.avgRating > 4))} >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listRes.map(element => <RestaurantCard key={element.info.id} resData={element}/>)
                }
            </div>
        </div>
    )
}

export default Body;
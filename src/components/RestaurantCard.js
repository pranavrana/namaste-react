import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, 
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla} = resData?.info
    return (
            <div className="res-card" style={styleCard}>
                <img src={CDN_URL+cloudinaryImageId} className="res-logo" alt="res-logo" />
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.slaString} minutes</h4>
            </div> 
    )
}

export default RestaurantCard;
import { CDN_URL } from "../utils/constants";


const RestCard=(props)=> {
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime} = resData?.data;
      return (
          <div className="res-card">
               <img className="res-logo"
               src={CDN_URL+ cloudinaryImageId}/> 
              <h3>{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{costForTwo/100} FOR TWO</h4>
              <h4>{deliveryTime} minutes</h4>
              <h4>{avgRating}</h4>
          </div>
      )
  }
  export default RestCard;
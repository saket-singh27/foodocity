const Restaurantcard = ({cloudinaryImageId,name,cuisines,avgRating}) =>{
    return (
    <div className="w-56 p-4 shadow-md m-4 my-5 rounded-md bg-red-100 h-96">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId
}></img>
        <h3 className="font-bold">{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h5>{avgRating} stars</h5>
    </div>
    );
};
export default Restaurantcard;
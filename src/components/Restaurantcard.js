const Restaurantcard = ({cloudinaryImageId,name,cuisines,avgRating}) =>{
    return (
    <div className="hover:scale-110  w-56 p-4 shadow-md m-4 my-5 rounded-md bg-red-100 h-[415px]">
        <img className="h-52 w-full rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId
}></img>
        <h3 className="font-bold pt-2 mt-2">{name}</h3>
        <h4 className="pt-2">{cuisines?.join(", ")}</h4>
        <h5 className="pt-2">{avgRating} ⭐</h5>
    </div>
    );
};
export default Restaurantcard;
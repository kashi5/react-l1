import { useEffect} from 'react';
import Shimmer from './Shimmer';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { RESTAURANT_MENU_API_URL } from '../utils/constant';

const RestaurantMenu = () => {

    const {resId} = useParams();
    const [resInfo, setResInfo] = useState(null); 

    useEffect(()=>{
        fetchMenu();
    },
    []);

    const fetchMenu = async () =>{ 
        const data = await fetch(RESTAURANT_MENU_API_URL + resId)
        const json = await data.json(); 
        console.log(json);
        setResInfo(json.data);
    };

    if (resInfo === null) return (
        <Shimmer />
    );


    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
    // Use the destructured variables in your code
    console.log("===");
    console.log(resInfo);
    console.log(itemCards);
 

  return (
   <div className="menu">
    <h1>{name}</h1>
    <h3>{cuisines.join(', ') } - {costForTwoMessage}</h3>
    <h2>Menu</h2>
    <ul>
        <li>hell</li>
        {itemCards.map((item)=>(
            <li key ={item.card.info.id}>
            {item.card.info.name} - Rs {item.card.info.price/100}</li>
        ))}
    </ul>
    </div>
  );
};

export default RestaurantMenu;
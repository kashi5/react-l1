import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from 'react';
import Shimmer from "./Shimmer";
import { RESTAURANT_API_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Body =() =>{
    
    //State variable to store the list of restaurants
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [FilterdRestaurants, setFilterdRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("body rendered");

    const mockData = [{
        id: 1,
        image_url: "https://www.sharmispassions.com/wp-content/uploads/2012/09/HakkaNoodles3.jpg",
        name: "China Express",
        cusine: "Noodels, Dumplings",
        rating: 3.6,
        delivery_time: 38
    },{
        id: 2,
        image_url: "https://www.dwarakaorganic.com/wp-content/uploads/2024/07/Masala-Dosa-min-870x470-1.jpg",
        name: "Udupi China",
        cusine: "South Indian, Chinese, North Indian",
        rating: 4.6,
        delivery_time: 45
    },
    ,{
        id: 3,
        image_url: "https://cdn.freelogovectors.net/wp-content/uploads/2023/06/dominos_pizza_logo-freelogovectors.net_.png",
        name: "Dominos",
        cusine: "Pizza, Pasta",
        rating: 4.1,
        delivery_time: 45
    }
    ]

    


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(RESTAURANT_API_URL);
    
    const json = await data.json(); 
    console.log(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterdRestaurants(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    return listOfRestaurants.length === 0 ? (<Shimmer />) :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search for restaurants" 
                    value = {searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                        />
                    <button className="filter-btn"
                    onClick={()=>{ 
                        console.log("search clicked");

                        const fileterdList = listOfRestaurants.filter((res)=>{
                            return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
                        }
                        )
                        setFilterdRestaurants(fileterdList);
                    }}
                    >Search</button>
                </div>
                <button 
                className="filter-btn" 
                onClick={()=>{
                    const fileterdList = listOfRestaurants.filter((res)=>{
                        return res?.info?.avgRating > 4.4;
                    })
                    setFilterdRestaurants(fileterdList);
                    console.log(fileterdList);
                }
                }>Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {FilterdRestaurants.map((res)=>(
                     <Link key={res?.info?.id} to={"/restaurants/"+ res?.info?.id }><RestaurantCard  resData={res}/></Link>
                ))}
            </div>
        </div>
    )
}

export default Body;
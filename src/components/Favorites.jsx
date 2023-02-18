import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";

const Favorites = ()=>{
    const {myFavorites} = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    }

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
    }

    return(
        <div>
            <h2>My Favorites</h2>
            <div>
                <select name="order" id="" onChange={handleOrder}>
                <option value='Ascendente'>Ascendente</option>
                <option value='Descendente'>Descendente</option>
                
                </select>
                
                <select name="gender" id="" onChange={handleFilter}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Gendereless'>Gendereless</option>
                    <option value='unknown'>Unknown</option>
                    
                </select>
            </div>
            
            <div>
            {
                myFavorites?.map((character) => {
                    return(
                    <div>
                        <h2>{character.name}</h2>
                        <h2>{character.gender}</h2>
                        <img src= {character.image} alt= "" />
                    </div>
                )})
            };
            </div>
        </div>
    )
}

export default Favorites;
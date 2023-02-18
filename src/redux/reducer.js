import {ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER} from './actions'
 
const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_CHARACTER:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload],
            }
        case DELETE_CHARACTER:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((id)=>{
                    return id.id !== action.payload;
                })
            }
        case FILTER:
            const filterCharacters = 
            action.payload=== 'All'
            ? state.allCharacters
            :state.allCharacters.filter(char =>
                char.gender === action.payload
            );
            return{
                ...state,
                myFavorites: filterCharacters,
            }
        case ORDER:
            const sortedCharacters = state.allCharacters;
            if (action.payload === 'Ascendente'){
                sortedCharacters.sort((a,b)=> a.id - b.id)
            }else{
                sortedCharacters.sort((a,b)=> b.id - a.id)
            }
            return {
                ...state,
                myFavorites: sortedCharacters,
            }
        default:
            return {...state}
    }
}

export default rootReducer;
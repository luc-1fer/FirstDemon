
export const ADD_CHARACTER ='ADD_PRODUCT'
export const DELETE_CHARACTER ='DELETE_CHARACTER'
export const FILTER= 'FILTER'
export const ORDER= 'ORDER'

export const addCharacter =(character)=> {
    return {type: ADD_CHARACTER, 
        payload:character}
}

export const deleteCharacter = (id)=>{
    return {type: DELETE_CHARACTER, 
        payload: id}
}

export const filterCards = (gender)=>{
    return{
        type: FILTER,
        payload: gender
    }
}

export const orderCards =(id)=>{
    return{
        type: ORDER,
        payload: id,
    }
}
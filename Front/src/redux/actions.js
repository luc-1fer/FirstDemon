
export const ADD_CHARACTER ='ADD_PRODUCT'
export const DELETE_CHARACTER ='DELETE_CHARACTER'
export const FILTER= 'FILTER'
export const ORDER= 'ORDER'

// export const addCharacter =(character)=> {
//     return {type: ADD_CHARACTER, 
//         payload:character}
// }

// export const deleteCharacter = (id)=>{
//     return {type: DELETE_CHARACTER, 
//         payload: id}
// }
export const addCharacter = (character)=>{
    return async function(dispatch){
        try {
            await fetch('http://localhost:3001/fav', {
                method: 'POST',
                body: JSON.stringify(character),
                headers: {'Content-type':'application/json; charset= UTF-8,'}
            })
            .then(response => response.json())
            .then(data => dispatch({
                type: ADD_CHARACTER,
                payload: data,
            }))
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteCharacter = (id) =>{
    return async function(dispatch){
        try {
            await fetch(`http://localhost:3001/fav/${id}`, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) dispatch({
                    type: DELETE_CHARACTER,
                    payload: id,
                })
            })
        } catch (error) {
            console.log(error);
        }
    }
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
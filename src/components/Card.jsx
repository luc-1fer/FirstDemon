import styles from './Cards.module.css'
import { Link } from 'react-router-dom';
import { addCharacter, deleteCharacter } from '../redux/actions';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function Card({ name, species, gender, onClose, id, image }) {

   const dispatch = useDispatch();
   const myFavorites = useSelector((state)=> state.myFavorites);
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   },[myFavorites]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         dispatch(deleteCharacter(id))
      } else {
         setIsFav(true)
         dispatch(addCharacter({ name, species, gender, onClose, id, image }))
      }
   }


   return (
      <div className={styles.cards}>

         <div>
            {
            isFav ? 
               (<button onClick={handleFavorite}>❤️</button>) :
               (<button onClick={handleFavorite}>🤍</button>)
            }
         </div>
         <button className={styles.cardsButton} onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
            <h2 className={styles.name}>{name}</h2>
         </Link>
         <h2 className={styles.spec}>{species}</h2>
         <h2 className={styles.gen}>{gender}</h2>
         <img src={image} alt="" />
      </div>
   );
}

// export function mapStateToProps(state){
//    return{
//       myFavorites: state.myFavorites,
//    }
// }

// export function mapDispatchToProps(dispatch) {
//    return {
//       addCharacter: (character) => dispatch(addCharacter(character)),
//       deleteCharacter: (id) => dispatch(deleteCharacter(id)),
//    }
// }


export default /*connect(mapStateToProps, mapDispatchToProps)*/Card;
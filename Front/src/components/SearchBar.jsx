import { useState } from 'react';
import styles from './Cards.module.css'

export default function SearchBar(props) {

   const [character, setCharacter] = useState(0);

   const handleSearch = (event)=> {
      let {value} = event.target;
      setCharacter(value);
   }

   return (
      <div >
      <input className= {styles.searchBar} type='search' placeholder="Search" onChange= {handleSearch} /> 
      <button className= {styles.searchBarButton} onClick={()=>props.onSearch(character)}>Agregar</button>
      <button className= {styles.searchBarButton} onClick={props.random}>Random Character</button>
      </div>
   );
}

//al hacer click ejecutamos esa funcion que ejecuta la otra fn. evitando un bucle inf.
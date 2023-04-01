import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from '../Nav/Nav.module.css';


export default function Detail (){
    
    const { detailId } = useParams();
    const [character, setCharacter] = useState({
        name : '',
        status : '',
        gender : '',
        origin : '',
        image : '',
        specie : '',
    });

    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter({
                name : char.name,
                status : char.status,
                gender : char.gender,
                origin : char.origin.name,
                image : char.image,
                specie : char.specie,
            });
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

      return (
        <div>
            <div className={styles.divDetail}>
              <p className={styles.divDetail}>Name: {character.name}</p>
              <p>Status: {character.status}</p>
              {character.specie && (  
              <p>Specie: {character.specie}</p>
                  )}
              <p>Geneder: {character.gender}</p>
              <p>Origin: {character.origin}</p> 
            </div>
            <img className={styles.imgDetail} src = {character.image} />
            {/* {character ? <img src={character.image} alt={character.image} /> : ' '} */}
        <button className={styles.searchBarButton} onClick={()=> navigate('/home')}>Back to Home</button>
        </div>
      );

};


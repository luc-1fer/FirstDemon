import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {
            characters?.map(({name,species,gender,image, id}, index) => 
            <Card 
            id = {id}
            key = {index}
            name = {name}
            species = {species}
            gender = {gender}
            image = {image}
            onClose={() => props.onClose(id)}
            />)
         }
      </div>
   );
}
/*hago un distractoring para evitar poner tantos char.algo 
El key es para evitar el warning del navegador, porque el obj no tiene un index propio
*/
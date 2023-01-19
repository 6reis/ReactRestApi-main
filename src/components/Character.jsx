export function Character({character}) {
  return (
    
    <div className="text-center p-5">
   
      <h3>{character.name} </h3>
      <img src={character.image} alt={character.name} className="img-fluid rounded-pill border border-5" />
      <p>{`Origen: ${character.origin && character.origin.name}`}</p>
      <p>{`Genero: ${character.gender}`}</p>
      <p>{`Estado: ${character.status} - ${character.species }`}</p>
    </div>
  );
}
export default Character;
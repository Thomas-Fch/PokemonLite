// import React from "react";
// import PropTypes from "prop-types";

// function PokemonCards({ pokemon }) {
//   const color = getColorByType(pokemon.types[0].type.name);

//   return (
//     <div style={{ display: "flex", flexDirection: "row" }}>
//       <div
//         className="pokemonCard"
//         style={{
//           backgroundColor: color,
//           width: "300px",
//           height: "400px",
//           backgroundSize: "150px",
//           backgroundPosition: "center",
//           marginRight: "10px",
//           position: "relative",
//         }}
//         // onClick={onClick}
//       ></div>
//       ;
//       <div
//         className="overlay"
//         style={{
//           position: "absolute",
//           display: "flex",
//           gap: "10px",
//           bottom: "0",
//           left: "0",
//           "align-items": "flex-start",
//           width: "100%",
//           height: "100%",
//           padding: "20px",
//           "box-sizing": "border-box",
//           "border-radius": "20px 20px 0px 0px",
//           "max-height": "100px",
//           background: "white", // couleur semi-transparente
//         }}
//       >
//         {pokemon.types.map((type) => (
//           <div
//             style={{
//               borderRadius: "5px",
//               color: "white",
//               backgroundColor: color,
//               padding: "5px 10px",
//               textAlign: "center",
//             }}
//             key={type.slot}
//           >
//             {type.type.name}
//           </div>
//         ))}
//       </div>
//       <div
//         style={{
//           color: "white",
//           fontSize: "20px",
//           marginTop: "0",
//         }}
//       >
//         <h2>{pokemon.name}</h2>
//       </div>
//       <img
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "contain",
//           marginTop: "-50px",
//         }}
//         src={pokemon.sprites.front_default}
//         alt={pokemon.name}
//       />
//     </div>
//   );
// }

// PokemonCards.propTypes = {
//   pokemon: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     sprites: PropTypes.shape({
//       front_default: PropTypes.string.isRequired,
//     }).isRequired,
//     types: PropTypes.arrayOf(
//       PropTypes.shape({
//         slot: PropTypes.number.isRequired,
//         type: PropTypes.shape({
//           name: PropTypes.string.isRequired,
//         }).isRequired,
//       })
//     ).isRequired,
//   }).isRequired,
//   sprites: PropTypes.shape({}).isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// export default PokemonCards;

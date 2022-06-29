
import React from "react"
import "./FormatRecipe.css";

function FormatRecipe({recipe, index, handleDeleteRecipe} ) {
  return (
    <tr className="recipe" key={index}>
     <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>{recipe.photo}<img src={recipe.photo} alt={recipe.name}/>
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
     <td><button onClick= {handleDeleteRecipe} name= "delete">Delete</button></td>
    </tr>
  )
}
export default FormatRecipe;


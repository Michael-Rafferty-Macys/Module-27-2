
import React, { useState } from "react";

function RecipeCreate({handleAddRecipe}) {
 const [name, setName] = useState(""); 
 const [cuisine, setCuisine] = useState(""); 
 const [photo, setPhoto] = useState("");
 const [ingredients, setIngredients] = useState("");
 const [preparation, setPreparation] = useState(""); 
 const handleSubmit = (event) => {event.preventDefault();
 const newRecipe = { name, cuisine, photo, ingredients, preparation };
       handleAddRecipe(newRecipe); setName(""); setCuisine("");
                                  setPhoto(""); setIngredients ("");
                                  setPreparation("")
       };   

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" id="create" onSubmit={(event) => handleSubmit(event)}>
      <table>
        <tbody>
          <tr>
            <td><input placeholder= "Name" name= "name" onChange= {e => setName (e.target.value)}/></td>
              <td><input placeholder= "Cuisine" name="cuisine" onChange= {e => setCuisine (e.target.value)}/></td>
                <td><input placeholder= "URL" name="photo" onChange= {e => setPhoto (e.target.value)}/></td>
                  <td><textarea placeholder= "Ingredients" name="ingredients" onChange= {e => setIngredients (e.target.value)}/></td>
                    <td><textarea placeholder= "Preparation" name="preparation" onChange= {e => setPreparation (e.target.value)}/></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
   </form>
  );
}

export default RecipeCreate;


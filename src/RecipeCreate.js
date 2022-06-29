
import React, { useState } from "react";

function RecipeCreate({handleAddRecipe}) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //define state variables and the state call back funtion for each field on the form
 const handleSubmit = (event) => {
  event.preventDefault();

  let alertMessage = "";
  if (formData.name === "") {
    alertMessage = alertMessage + "Name must be entered; "
  }
 
  if (formData.cuisine === "") {
    alertMessage = alertMessage + "Cuisine must be entered; "
  }

  if (formData.photo === "") {
    alertMessage = alertMessage + "URL for photo must be entered; "
  }

  if(!isValidURL(formData.photo)) {
    alertMessage = alertMessage + "URL for photo is not valid; "
  }

  if (formData.ingredients === "") {
    alertMessage = alertMessage + "Ingredients must be entered; "
  }

  if (formData.preparation === "") {
    alertMessage = alertMessage + "Preparation must be entered; "
  }
  
  if (alertMessage === "") {
    console.log(formData)
         handleAddRecipe(formData);
         setFormData({ ...initialFormState });
       document.getElementById("alertMessage").innerText = "";
  } else {
    document.getElementById("alertMessage").innerText = alertMessage;
  }
 };   

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" id="create" onSubmit={(event) => handleSubmit(event)}>
      <table>
        <tbody>
          <tr>
            <td><input placeholder= "Name" name= "name" onChange= {handleChange} value={formData.name}/></td>
              <td><input placeholder= "Cuisine" name="cuisine" onChange= {handleChange}value={formData.cuisine}/></td>
                <td><input placeholder= "URL" name="photo" onChange= {handleChange}value={formData.photo}/></td>
                  <td><textarea placeholder= "Ingredients" name="ingredients" onChange= {handleChange}value={formData.ingredients}/></td>
                    <td><textarea placeholder= "Preparation" name="preparation" onChange= {handleChange}value={formData.preparation}/></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div id="alertMessage"></div>
   </form>
  );
}

function isValidURL(string) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};

export default RecipeCreate;


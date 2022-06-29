import React, { useState } from "react";

function RecipeCreate({handleAddRecipe}) {

  //create an initial definition for the form (all fields are blank)
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  //create state for form data
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //When the user clicks on the submit button
 const handleSubmit = (event) => {
  event.preventDefault();

  //validate the input data
  let alertMessage = "";

  //name must be entered
  if (formData.name === "") {
    alertMessage = alertMessage + "Name must be entered; "
  }
 
  //cuisine must be entered
  if (formData.cuisine === "") {
    alertMessage = alertMessage + "Cuisine must be entered; "
  }

  //photo must be entered
  if (formData.photo === "") {
    alertMessage = alertMessage + "URL for photo must be entered; "
  }

  //photo must be a valid URL
  if(!isValidURL(formData.photo)) {
    alertMessage = alertMessage + "URL for photo is not valid; "
  }

  //ingredients must be entered
  if (formData.ingredients === "") {
    alertMessage = alertMessage + "Ingredients must be entered; "
  }

  //preparation must be entered
  if (formData.preparation === "") {
    alertMessage = alertMessage + "Preparation must be entered; "
  }
  
  //if alertMessage is blank, all inputs validated properly
  if (alertMessage === "") {
        //pass the form data back to the App,js code to add to the recipe state
         handleAddRecipe(formData);
         //reset the form fields to their original state
         setFormData({ ...initialFormState });
         //clear the error message on the form that the user sees
         document.getElementById("alertMessage").innerText = "";
  } else {
    //if the alert message was not blank, display the errors to the user
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

//funtion to validate the url using regular expressions
function isValidURL(string) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g);
  return (res !== null)
};

export default RecipeCreate;

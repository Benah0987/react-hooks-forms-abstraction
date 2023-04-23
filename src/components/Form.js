import React, { useState } from "react";

function Form() {
  //initial state is an object
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });
  const [isAdult, setIsAdult] = useState(false);
  
  //function is called whenever any of the form inputs change
  function handleChange(event) {
    //name is key, it'll target the inputs
    const name = event.target.name;
    let value = event.target.value;

   //checks if checkbox is checked
    if (event.target.type === "checkbox") {
      if(name === isAdult){
        setIsAdult(event.target.checked);
      }
      else{
        value = event.target.checked;
      }

    }
    //updating the data by creating a new object
    setFormData({
      //using the spread operator to get object's data
      ...formData,
      //replace the property name
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <label>
        Are you 18
        <input 
          type ="checkbox"
          name = "isAdult"
          onChange = {handleChange}
          checked={isAdult}
          />

      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

import React, { useState } from "react";

function NewPlantForm({ handleSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleChange(event) {
    const name = event.target.name
    let value = (event.target.value)
    if (event.target.type === "number") {
      value = parseFloat(event.target.value)
    }
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleClick() {
    handleSubmit(formData)
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Plant name" />
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
        <input type="number" name="price" value={formData.price} onChange={handleChange} step="0.01" placeholder="Price" />
        <button type="submit" onClick={handleClick}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

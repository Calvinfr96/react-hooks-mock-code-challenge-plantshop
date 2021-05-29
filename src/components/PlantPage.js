import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const baseURL = "http://localhost:6001/plants";
  useEffect(() => {
    fetch(baseURL)
      .then(resp => resp.json())
      .then(data => {
        setPlants(data)
        setIsLoaded(true)
      })
  }, [])

  function handleSearch(searchInput) {
    const searchedPlants = plants.filter(plant => {
      const name = plant.name.toLowerCase()
      return name.includes(searchInput.toLowerCase())
    })
    setPlants(searchedPlants)
  }

  function handleSubmit(formData) {
    const configObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }
    fetch(baseURL, configObj)
      .then(resp => resp.json())
      .then(data => setPlants([...plants, formData]))
  }
  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={plants} isLoaded={isLoaded} />
    </main>
  );
}

export default PlantPage;

import React, {useState} from "react"
import Card from "./components/Card/Card"
import fetchData from "./services/api"
import initialData from "./helpers/initialData"


function App() {

  const [city, setCity] = useState('')
  const [data, setData] = useState(initialData)
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    fetchData(city).then((res)=>{
      setData(res)
    })
  }

  return (
    <div className="flex w-full h-screen justify-center items-center flex-col gap-4 "> 
      
      <form onSubmit={handleSubmit} className="flex flex-row gap-2"> 
        <input
          className="p-3 rounded-lg outline-none" 
          type="text" 
          placeholder="Cidade"
          value={city}
          onChange={(event)=>{setCity(event.target.value)}}
          />

        <button 
          className="p-3 bg-blue-500 text-white rounded-lg"
          type="submit"
        >Pesquisar</button>
      </form>
      <Card data={data} />
    </div>
  )
}

export default App


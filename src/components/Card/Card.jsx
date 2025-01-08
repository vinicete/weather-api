import React from "react";

function Card(){

  return(
    <div className="bg-white p-6 rounded-lg flex flex-col gap-3 items-center">

      <div className="local flex flex-col items-center">
        <span className="font-bold text-slate-700 text-xl">Fortaleza</span>
        <span className="text-sm text-slate-400">Ceará, Brasil</span>
      </div>
      
      <div className="graus flex text-slate-700">
        <span className="text-8xl font-bold">27</span>
        <span className="text-3xl font-bold mt-3">°C</span>
      </div>

      <div className="tempo flex flex-col">
        <span>icone</span>
        <span>nublado</span>
      </div>

    </div>
  )
}

export default Card;
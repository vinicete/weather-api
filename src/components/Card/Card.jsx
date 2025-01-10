import React from "react";
import propTypes from "prop-types";

function Card({data}){

  const{
    location,
    current
  } = data

  return(
    <div className="bg-white p-6 rounded-lg flex flex-col gap-3 items-center">

      <div className="local flex flex-col items-center">
        <span className="font-bold text-slate-700 text-xl">{location.name}</span>
        <span className="text-sm text-slate-400">{location.region}, {location.country}</span>
      </div>
      
      <div className="graus flex text-slate-700">
        <span className="text-8xl font-bold">{current.temp_c}</span>
        <span className="text-3xl font-bold mt-3">°C</span>
      </div>

      <div className="tempo flex flex-col">
        <img className="" src={current.condition.icon} alt="" />
        <span>{current.condition.text}</span>
      </div>

    </div>
  )
}

export default Card;

Card.propTypes = {
  data: propTypes.object
}.isRequired
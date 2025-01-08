const key = "5996d2be034048d8acd112712250801"

const fetchData = async (city) =>{
  
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`

  const fetchResponse = await fetch(url)
  const data = await fetchResponse.json()

  return(
    data
  )
}

export default fetchData
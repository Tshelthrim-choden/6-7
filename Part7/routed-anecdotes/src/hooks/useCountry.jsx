import { useState, useEffect } from 'react'
import axios from 'axios'

export const useCountry = (countryName) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await axios.get(`https://restcountries.com/v3/name/${countryName}`)
      setCountry(response.data[0])
    }

    fetchCountry()
  }, [countryName])

  return country
}

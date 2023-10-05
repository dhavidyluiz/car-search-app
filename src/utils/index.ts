import { CarProps, FetchFilterProps } from '@/types'

export async function fetchCars(filters: FetchFilterProps) {
  const {manufacturer, year, model, limit, fuel} = filters

  let url = "https://api.api-ninjas.com/v1/cars?"
  url += manufacturer ? `make=${manufacturer}&` : '' 
  url += year ? `year=${year}&` : ''
  url += model ? `model=${model}&` : ''
  url += limit ? `limit=${limit}&` : ''
  url += fuel ? `fuel_type=${fuel}` : ''

  const response = await fetch(
    url, { headers: {'X-Api-Key': process.env.API_KEY || ""}}
  )

  const result = await response.json()

  return result
}


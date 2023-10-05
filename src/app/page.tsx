import { Hero, Searchbar, Filter, CarCard } from '@/components'
import { fuels, yearsOfProduction} from '@/constants'
import { FetchFilterProps } from '@/types'

import { fetchCars } from '@/utils'

export default async function Home({ searchParams }: any) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '' ,
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || ''
  })

  const dataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-6 padding-x padding-y' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <Searchbar />
          {/* <div className='home__filter-container'>
            <Filter title='fuel' options={fuels} />
            <Filter title='year' options={yearsOfProduction} />
          </div> */}
        </div>
        { !dataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              { allCars?.map((car, index) => (
                <CarCard key={index} car={ car } />
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results.</h2>
            <p>{ allCars?.message }</p>
          </div>
        ) }
      </div>
    </main>
  );
}

'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { SearchManufacturer } from '@/components'

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(manufacturer === '' && model === '') {
      return alert('Please fill in the serach bar.')
    }

    updateParams(manufacturer.toLowerCase(), model.toLowerCase())
  }

  const updateParams = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    manufacturer !== '' ? searchParams.set('manufacturer', manufacturer) : searchParams.delete('manufacturer')
    model !== '' ? searchParams.set('model', model) : searchParams.delete('model')

    const newSearchParams = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newSearchParams)

  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
        manufacturer={ manufacturer }
        setManufacturer={ setManufacturer } />
      </div>
      <div className="searchbar__item">
        <Image
          src='/img/model-icon.png'
          alt='Car Model'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'/>
          <input 
            type="text" 
            name='model' 
            value={model} 
            onChange={ (e) => setModel(e.target.value) }
            placeholder='Tiguan' 
            className='searchbar__input'/>
          <button 
            type='submit'
            className='-ml-11 z-10'>
            <Image 
              src='/img/magnifying-glass.svg' 
              alt='Search'
              width={40}
              height={40}
              className='object-contain' />
          </button>
      </div>
    </form>
  )
}

export default Searchbar
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button, CarDetails } from '.'
import { CarProps } from '@/types'

interface CarCardProps {
  car: CarProps
}

const CarCard = ({car}: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const {city_mpg,drive,make,model,transmission,year} = car

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className='car-card__content-title'>{make} {model}</h2>
      </div>
      <div className="relative w-full h-40 my-6 object-contain">
        <Image src='/img/hero.png' alt='Car Model' fill priority className='object-contain opacity-40' />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-600">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src='/img/steering-wheel.svg' alt='Transmission' width={20} height={20} />
            <p className='text-[14px]'>
              { transmission === 'a' ? 'Automatic' : 'Manual' }
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src='/img/tire.svg' alt='Tyre' width={20} height={20} />
            <p className='text-[14px]'>
              { drive.toUpperCase() }
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src='/img/gas.svg' alt='Fuel' width={20} height={20} />
            <p className='text-[14px]'>
              { city_mpg } MPG
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <Button 
            title='View More' 
            customStyles='w-full py-[16px] rounded-full bg-primary'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/img/right-arrow.svg'
            handleClick={() => {
              setIsOpen(true)
            }}/>
        </div>
        <CarDetails 
          isOpen={ isOpen }
          closeModal={ () => setIsOpen(false) }
          car={ car }/>
      </div>
    </div>
  )
}

export default CarCard
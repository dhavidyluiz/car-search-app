'use client';

import Image from "next/image"
import { ButtonProps } from '@/types'

const Button = ({ isDisable, btnType, customStyles, textStyles, title, rightIcon, handleClick }: ButtonProps) => (
  <button 
   disabled={isDisable} 
   type={btnType || 'button'} 
   className={`custom-btn ${customStyles}`} 
   onClick={handleClick}>
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
         src={rightIcon} 
         alt='arrow-left'
         fill 
         className='object-contain' />
      </div>
    )}
   </button>
)

export default Button
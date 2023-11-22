import React from 'react'

export default function StoreImage({ imgSrc, alt }) {
  return (
    <img className='w-24 rounded-xl bg-stone-300 aspect-square' src={imgSrc} alt={alt}></img>
  )
}

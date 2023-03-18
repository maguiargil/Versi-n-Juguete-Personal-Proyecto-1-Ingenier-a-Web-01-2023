import React from 'react'

interface SupermarketCardProps{
  image: string;
  product: string;
  alternative: string;
}

const SupermarketCard = ({image, product, alternative}: SupermarketCardProps) => {
  return (
  <div>
    <img src={image} alt={product + " " + alternative}/>
</div>
  )
}

export { SupermarketCard };
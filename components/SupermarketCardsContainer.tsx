import React from 'react'
import { SupermarketCard } from './SupermarketCard'

const supermarketCardInfo = {
    row_one:[
        {
            image:'/vectors/supermercado-producto-1.svg',
            product:'eucerin esmalte',
            alternative:'esmalte para la piel'
        },
        {
            image:'/vectors/supermercado-producto-2.svg',
            product:'cicatricure crema',
            alternative:'crema para el día'
        },
        {
            image:'/vectors/supermercado-producto-3.svg',
            product:'nivea crema',
            alternative:'crema para la piel'
        },
        {
            image:'/vectors/supermercado-producto-4.svg',
            product:'cicatricure crema',
            alternative:'crema para la noche'
        }
    ],

    row_two:[
        {
            image:'/vectors/supermercado-producto-5.svg',
            product:'sopa nissin',
            alternative:'sopa instantánea'
        },
        {
            image:'/vectors/supermercado-producto-6.svg',
            product:'whisky chivas regal',
            alternative:'licor'
        },
        {
            image:'/vectors/supermercado-producto-7.svg',
            product:'eucerin ph5 crema',
            alternative:'crema para la piel'
        },
        {
            image:'/vectors/supermercado-producto-8.svg',
            product:'shampoo tio nacho',
            alternative:'aclarante de cabello'
        }
    ]
}

const SupermarketCardsContainer = () => {
    /*console.log(supermarketCardInfo.row_one)*/
  return (
    <div className="">
    <div className="flex gap-4">
        {supermarketCardInfo.row_one.map((producto, index) => {return <SupermarketCard key={index} image={producto.image} product={producto.product} alternative={producto.alternative}></SupermarketCard>})}
        {/*<div>
            <img src="/vectors/supermercado-producto-1.svg" alt=""/>
        </div>
        <div>
            <img src="/vectors/supermercado-producto-2.svg" alt=""/>
        </div>
        <div>
            <SupermarketCard 
            image='/vectors/supermercado-producto-3.svg'
            product='nivea crema'
            alternative='crema para la piel'
            ></SupermarketCard>
        </div>
        <div>
        <SupermarketCard
            image='/vectors/supermercado-producto-4.svg'
            product='cicatricure noche'
            alternative='crema para la piel'
        ></SupermarketCard>
    </div>*/}
    </div>
    <div className="flex gap-4">
    {supermarketCardInfo.row_two.map((producto, index) => {return <SupermarketCard key={index} image={producto.image} product={producto.product} alternative={producto.alternative}></SupermarketCard>})}
        {/*<div>
            <img src="/vectors/supermercado-producto-5.svg" alt=""/>
        </div>
        <div>
            <img src="/vectors/supermercado-producto-6.svg" alt=""/>
        </div>
        <div>
        <SupermarketCard
            image='/vectors/supermercado-producto-7.svg'
            product='eucerin crema'
            alternative='crema para la piel'
        ></SupermarketCard>
        </div>
        <div>
        <SupermarketCard
            image='/vectors/supermercado-producto-8.svg'
            product='tio nacho aclarante'
            alternative='shampoo cabello'
        ></SupermarketCard>
    </div>*/}
    </div>
</div>
  )
}

export { SupermarketCardsContainer }
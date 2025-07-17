import React from 'react'
import r5 from '../assets/rating-45.png'

const Home = ({ products, viewRecipe  }) => {


    return (
        <>
            <div className='flex flex-wrap  justify-center items-center p-10 gap-10 m-auto'>
                {products.length != 0 ? products.map((product, index) => {

                    return (
                        <div key={product.id} className='border w-70 h-100  border-gray-300 rounded-lg cursor-pointer shadow-md
                        '
                        onClick={()=>viewRecipe(product.id)}>
                            <div>
                                <img src={product.image} className='w-70 h-60 rounded-tl-lg rounded-tr-lg' />
                            </div>
                            <div className='p-4'>
                                <p className='font-poppins'>{product.cuisine} Cusine</p>
                                <h1 className='font-cuprum text-2xl font-bold'>{product.name}</h1>
                            </div>
                            <div className='flex justify-start items-center gap-5 p-2'>
                                <img src={r5} className='w-25 ' />
                                <p className='text-gray-600 text-sm'>{product.reviewCount} Ratings</p>
                            </div>
                        </div>
                    )
                }) : <div className='flex flex-col justify-center items-center'> 
                         <h1 className='text-4xl text-black-500 font-semibold mt-5'>0 results found for your search.</h1> 
                         <p className='font-poppins mt-5 text-lg'>Please try another search term</p>
                    </div>}
            </div>
        </>
    )
}

export default Home

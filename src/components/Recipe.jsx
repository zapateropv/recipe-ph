import React from 'react'
import { useLocation } from 'react-router-dom'
import star from '../assets/rating-45.png'
import { ToastContainer, toast } from 'react-toastify';
const Recipe = ({ saveRecipe }) => {

  const location = useLocation()
  const product = location.state.product

  console.log(product)

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
      <div className='flex justify-center '>
        <div className='flex flex-col justify-center  items-center m-5 shadow-2xl w-2xl   rounded-2xl p-10'>
          <div>
            <h1 className='text-4xl font-poppins font-semibold  mb-2'>{product.name}</h1>
          </div>
          <div className='flex justify-between items-center gap-5 font-jetbrains text-sm'>
            <img src={star} className='w-20  ' />|
            <p>{product.rating} RATING</p>|
            <p>{product.reviewCount} REVIEWS</p>
          </div>
          <div >
            <img src={product.image} className='w-md rounded-md  mt-10 ' />
          </div>
       
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-start border border-gray-300 
  p-5 mt-10 shadow-lg rounded-md border-t-orange-400 border-t-[10px]">

            <div>
              <p className="font-semibold text-lg font-poppins">Difficulty:</p>
              <p className="text-md">{product.difficulty}</p>
            </div>

            <div>
              <p className="font-semibold text-lg font-poppins">Cook Time:</p>
              <p className="text-md">{product.cookTimeMinutes} mins</p>
            </div>

            <div>
              <p className="font-semibold text-lg font-poppins">Calories Per Serving:</p>
              <p className="text-md">{product.caloriesPerServing} calories</p>
            </div>

            <div className="mt-4 md:mt-0">
              <p className="font-semibold text-lg font-poppins">Prep Time:</p>
              <p className="text-md">{product.prepTimeMinutes} mins</p>
            </div>

            <div className="mt-4 md:mt-0">
              <p className="font-semibold text-lg font-poppins">Servings:</p>
              <p className="text-md">{product.servings}</p>
            </div>

            <div className="mt-4 md:mt-0">
              <p className="font-semibold text-lg font-poppins">Meal Type:</p>
              <p className="text-md">{product.mealType}</p>
            </div>
          </div>
        
          


          <div className='flex flex-col items-start justify-center w-full'>
            <div >
              <h1 className='text-3xl mt-20 font-poppins font-semibold'>How to make {product.name}</h1>
              <p className='mt-4 text-lg'>You'll find a detailed ingredient list and step-by-step instructions in the <b>{product.name}</b> recipe below, but let's go over the basics:</p>
            </div>
            <div>
              <h1 className='text-3xl font-semibold mt-10 border-b-3 border-b-red-500  '>Ingredients: </h1>
              <ul className='list-disc '>
                {product.ingredients.map((ing) => (
                  <li className='text-md p-2'>{ing}</li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className='text-3xl font-semibold mt-10 w-45 border-b-3 border-b-green-500'>Instructions: </h1>
              <ol className='list-decimal '>
                {product.instructions.map((ins, index) => (
                  <li className='text-md p-2 mb-2' >{ins}</li>
                ))}
              </ol>
              <button className='bg-green-700 p-2 rounded-md text-white font-semibold 
            hover:bg-green-800 cursor-pointer' onClick={saveRecipe}>Add to favorites</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Recipe

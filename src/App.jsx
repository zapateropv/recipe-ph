import recipeLogo from './assets/recipe-logo.png'
import { CiSearch } from "react-icons/ci";
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import { useState, useEffect } from 'react'
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';
import Recipe from './components/Recipe';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [products, setProducts] = useState([])
  const [newProducts, setNewProducts] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  //fetch the data from the API
  useEffect(() => {

    const getData = async () => {
      const res = await fetch('https://dummyjson.com/recipes')
      const data = await res.json()


      setNewProducts(data.recipes)
      setProducts(data.recipes)

    }
    getData()
  }, [])



  //filter all the products base on the search input
  const findRecipe = () => {
    const searchVal = search.toLowerCase().trim();

    if (searchVal === "") {
      setProducts(newProducts);
      return;
    }

    const filtered = newProducts.filter((product) => {
      const newCategory = product.tags.map(tag => tag.toLowerCase());
      return newCategory.includes(searchVal);
    });

    setProducts(filtered);
  };

  //save to favorites

  const saveRecipe = () => {
    toast.success('Added to favorites!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
  }


  //navigate to recipe component
  const viewRecipe = (id) => {

    const product = products.find(item => item.id === id)

    navigate('/recipe', { state: { product } })
  }

  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <div className='sticky top-0 z-100 bg-white '>
          <div className='flex justify-center items-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] p-5 gap-10'>
            <img src={recipeLogo} className='w-32 cursor-pointer' />
            <span className='flex justify-between items-center border border-black w-sm h-10 rounded-sm'>
              <input type='text' className='outline-none pl-2 max-w-auto w-full' placeholder='Find a recipe or ingredient'
                value={search} onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => { e.key === "Enter" ? findRecipe() : null }}
              />
              <CiSearch className='bg-red-600 text-white h-full w-8 rounded-tr-sm rounded-br-sm cursor-pointer'
                onClick={findRecipe}
              />
            </span>
            <Link to="/"><span className='spans'>Home</span></Link>
            <Link to="about"><span className='spans'>About</span></Link>
          </div>
        </div>
       
        <div className="flex-1">
          <Routes>
            <Route path='/' element={<Home products={products} viewRecipe={viewRecipe} />} />
            <Route path='/about' element={<About />} />
            <Route path='/recipe' element={<Recipe saveRecipe={saveRecipe} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App

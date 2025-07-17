import { aboutUs } from '../aboutUs'


const About = () => {




  return (
 <div className='bg-[url("/recipe.jpg")] bg-cover bg-center min-h-screen  flex justify-center items-center px-5 py-10'>
  <div className="p-10 flex flex-col justify-center items-center bg-white bg-opacity-90 w-full max-w-4xl rounded-2xl shadow-2xl">
    <h1 className='font-poppins text-4xl font-semibold'>About Us</h1>
    
    {aboutUs.map((item, index) => (
      <div key={index}>
        <h1 className='text-2xl font-semibold mb-5 mt-5'>{item.title}</h1>
        <p className='text-md'>{item.content}</p>
      </div>
    ))}
  </div>
</div>



  )
}

export default About

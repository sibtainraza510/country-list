import  {FaArrowRight}  from 'react-icons/fa';
import { About } from './About';
export const Home = () =>{
    return(
        <>
        <div style={{backgroundColor:"pink"}} className='homediv grid grid-cols-2 pt-18 '>

        <div className='flex flex-col content-center justify-items-center gap-y-5 pl-20'>
        <h1 className='text-4xl pt-6'>Explore the World, One Country at a Time.  </h1>
        <br></br>
        <p className='text-lg'>Discover the history, culture and beauty of every nation. sort, search and filter through countries to find the details you need. </p>
        <br></br>
        <button style={{width:"24%"}} className='explorebtn rounded-lg border-solid border-black border-2 flex' type='submit '><p style={{paddingLeft:"5px"}}>Start Exploring</p> <FaArrowRight style={{paddingTop:"2px", height:"22px", width:"50px"}}/>  </button>
        </div>

        <div className='worldimage flex justify-center items-center pb-10'>
            <img  src="/images/worldimage.png" alt="worldkaimage" />
        </div>

        </div>
        
        <About/>

        </>
    )
} 
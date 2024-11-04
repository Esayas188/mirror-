
import eyebrow1 from '../../assets/eyebrow/eyebrow1.jpg'
import lips1 from '../../assets/eyebrow/lips1.jpg'
import cheeks from '../../assets/eyebrow/cheeks.jpg'
import eyeshadow from '../../assets/eyebrow/eyeshadow.jpg'
import model from '../../assets/eyebrow/model.png'


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Weather from '../Weather'
import Navbar from '../Navbar'


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2500 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 2500, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
function Home() {


  return (
    <>
    {/* <Navbar/> */}
    
    <div className=' max-w-[1400px] mx-auto text-white font-poppin text-lg italic min-h-screen grid grid-cols-2  '>
      <div className=' flex justify-center  pt-[60px]  ' >
        <div className=' w-[300px] overflow-hidden h-[400px]  rounded-full border-2 border-white '>
        <img src={model} alt=" model"  className='p-[1px] w-full h-full '/>


        </div>

      </div>
      <div className=' flex flex-col   pt-[40px] pr-[100px]'>
        <div className=' '>
            <p className='  '>
              Eyebrow
            </p>
          <Carousel itemClass="carousel-item-custom-padding"responsive={responsive} className=''>
            <img src={eyebrow1} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>
            <img src={eyebrow1} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>

            <img src={eyebrow1} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>

            <img src={eyebrow1} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>
            <img src={eyebrow1} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>
            <img src={eyebrow1} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>

          </Carousel>


        </div>
        <div  className=' '>
        <p className='  '>
                Cheeks
            </p>
          <Carousel itemClass="carousel-item-custom-padding"responsive={responsive} className=''>
            <img src={cheeks} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>
            <img src={cheeks} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>

            <img src={cheeks} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>

            <img src={cheeks} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>
            <img src={cheeks} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>
            <img src={cheeks} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>

          </Carousel>

        </div>
        <div  className=''>
        <p className=' '>
              Eye shadow
            </p>
          <Carousel itemClass="carousel-item-custom-padding"responsive={responsive} className=''>
            <img src={eyeshadow} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>
            <img src={eyeshadow} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>

            <img src={eyeshadow} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>

            <img src={eyeshadow} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>
            <img src={eyeshadow} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>
            <img src={eyeshadow} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer'/>

          </Carousel>

        </div>
        <div  className=''>
        <p className=' '>
              Lips
            </p>
          <Carousel itemClass="carousel-item-custom-padding"responsive={responsive} className=''>
            <img src={lips1} alt=" eyebrow"  className=' h-[80px] hover:cursor-pointer '/>
            <img src={lips1} alt=" eyebrow"  className=' h-[80px]  hover:cursor-pointer'/>

            <img src={lips1} alt=" eyebrow"  className=' h-[80px]  hover:cursor-pointer'/>

            <img src={lips1} alt=" eyebrow"  className=' h-[80px]  hover:cursor-pointer'/>
            <img src={lips1} alt=" eyebrow"  className=' h-[80px]  hover:cursor-pointer'/>
            <img src={lips1} alt=" eyebrow"  className=' h-[80px]  hover:cursor-pointer'/>

          </Carousel>

        </div>
        <div className=' my-[100px]'>
         <Weather/>
        

        </div>


      </div>


    </div>
    </>

  )
}

export default Home



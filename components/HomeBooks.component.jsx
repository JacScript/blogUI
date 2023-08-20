"use client"
import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
const HomeBooks = () => {
    const size = useWindowSize();
    const books = [1,2,3,4,5,6,7,8,9,10]
    let width = size.width
    if(size.width >=1450){
        width = Math.ceil(size.width - 128)
    }else{
        width = Math.ceil(size.width - 32)
    }
    let [sliderRef] =  useKeenSlider({
        loop: true,
        slides: {
            perView: width /400
        },
        })

    return (
        <div className="booksMargin">
            <h1>Pages of Possibility</h1>
            <div ref={sliderRef} className="keen-slider" style={{height:'600px'}}  >
                {books.map((i) => (
                    <div key={i} style={{position:'relative'}} className="keen-slider__slide">
                        <Image src='/400x600.svg' alt='book' fill style={{objectFit:'contain'}} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeBooks
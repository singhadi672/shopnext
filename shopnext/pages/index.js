import HomepageAnimation from "../components/HomepageAnimation";
import Navbar from "../components/Navbar";
import FoodLoop1 from '../components/HomepageAnimation/foodLoop1.svg';
import FoodLoop2 from '../components/HomepageAnimation/foodLoop2.svg';
import FoodLoop3 from '../components/HomepageAnimation/foodLoop3.svg';
import FoodLoop4 from '../components/HomepageAnimation/foodLoop4.svg';
import FoodLoop5 from '../components/HomepageAnimation/foodLoop5.svg';
import FoodLoop6 from '../components/HomepageAnimation/foodLoop6.svg';
import FoodLoop7 from '../components/HomepageAnimation/foodLoop7.svg';
import FoodLoop8 from '../components/HomepageAnimation/foodLoop8.svg';
import { useEffect, useState } from "react"

export default function Home({ homepageData }) {

  const [color, setColor] = useState(0)
  useEffect(() => {
    const Id = setInterval(() => {
      setColor(prev => prev === 0 ? 1 : 0)
    }, 3000)

    return () => {
      clearInterval(Id)
    }
  }, [])

  return (
    <div className="w-full h-full overflow-x-hidden">
      <Navbar />
      <div className="absolute w-full h-full overflow-x-hidden">
        <div className={`flex justify-center items-end absolute w-full h-3/5 -top-40 md:w-[1500px] md:rounded-full md:-top-[1000px] -z-10 md:-right-[300px] md:h-[1500px] transition-all ease-in-out ${color === 0 ? 'bg-orange-light' : 'bg-green-light'} overflow-hidden`}>
          <div className="animate-spin-pause absolute md:w-[30rem] md:h-[30rem] flex justify-center items-center rounded-full border-2 border-red-500 border-dashed md:-bottom-52 md:left-[29rem] w-60 h-60 -bottom-28">
            <FoodLoop1 className="absolute md:translate-x-[15rem] md:scale-100 scale-50 translate-x-[7rem]" />
            <FoodLoop2 className="absolute md:translate-y-[16rem] md:scale-100 scale-50 translate-y-[8rem]" />
            <FoodLoop3 className="absolute md:-translate-x-[15rem] md:scale-100 scale-50 -translate-x-[7rem]" />
            <FoodLoop4 className="absolute md:translate-x-[11rem] md:translate-y-[11rem] md:scale-100 scale-50 translate-x-[5rem] translate-y-[6rem]" />
            <FoodLoop5 className="absolute md:translate-x-[10rem] md:-translate-y-[10rem] md:scale-100 scale-50 translate-x-[5rem] -translate-y-[5rem]" />
            <FoodLoop6 className="absolute md:-translate-x-[11rem] md:translate-y-[11rem] md:scale-100 scale-50 -translate-x-[5rem] translate-y-[6rem]" />
            <FoodLoop7 className="absolute md:-translate-y-[14rem] md:scale-100 scale-50 -translate-y-[7rem]" />
            <FoodLoop8 className="absolute md:-translate-x-[10rem] md:-translate-y-[10rem] md:scale-100 scale-50 -translate-x-[5rem] -translate-y-[5rem]" />
          </div>
        </div>
        <div className="absolute md:h-auto h-32 w-full md:w-auto md:top-80 md:right-80 bottom-1/2 md:bottom-10 flex items-center justify-center">
          <HomepageAnimation color={color} />
        </div>
        <div className="absolute md:top-80 bottom-28 w-full md:w-auto md:px-12 px-4 md:block flex flex-col justify-center items-center">
          <h2 className={`${color === 0 ? 'text-orange-dark' : 'text-green-dark'} transition-all ease-in-out font-bold text-3xl`}>${homepageData[color].cost}</h2>
          <h2 className="font-semibold md:text-4xl text-2xl md:w-80 w-full leading-tight text-center md:text-left">{homepageData[color].heading}</h2>
          <p className="md:w-1/2 w-full mt-4 md:text-base text-sm">{homepageData[color].subHeading}</p>
          <button className={`${color === 0 ? 'bg-orange-dark' : 'bg-green-dark'} transition-all ease-in-out px-4 py-3 w-48 md:ml-28 mx-auto mt-5 text-lg font-semibold text-white rounded-3xl`}>Order Now</button>
        </div>
      </div>
      <div className="absolute md:mt-[700px] bottom-12 w-full flex justify-center items-center">
        <h2>Popular Categories</h2>
      </div>
    </div>
  )
}

export function getStaticProps() {

  const homepageData = [
    {
      cost: 32,
      heading: 'Green Goddess Chicken Salad',
      subHeading: 'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.'
    },
    {
      cost: 35,
      heading: 'Asian Cucumber Salad',
      subHeading: 'Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!'
    }
  ]
  return {
    props: {
      homepageData
    }
  }
}

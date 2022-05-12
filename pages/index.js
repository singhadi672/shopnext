import HomepageAnimation from "../components/HomepageAnimation";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react"
import FoodLoops from "../components/HomepageAnimation/FoodLoops";
import axios from "axios";
import PopularCategories from "../components/PopularCategories";

export default function Home({ homepageData, categories, popularProducts }) {

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
        <FoodLoops color={color} />
        <div className="absolute md:h-auto h-32 w-full md:w-auto md:top-80 md:right-80 bottom-1/2 md:bottom-10 flex items-center justify-center">
          <HomepageAnimation color={color} />
        </div>
        <div className="absolute md:top-80 bottom-36 w-full md:w-auto md:px-12 px-4 md:block flex flex-col justify-center items-center">
          <h2 className={`${color === 0 ? 'text-orange-dark' : 'text-green-dark'} transition-all ease-in-out font-bold text-3xl`}>${homepageData[color].cost}</h2>
          <h2 className="font-semibold md:text-4xl text-2xl md:w-80 w-full leading-tight text-center md:text-left">{homepageData[color].heading}</h2>
          <p className="md:w-1/2 w-full mt-4 md:text-base text-sm">{homepageData[color].subHeading}</p>
          <button className={`${color === 0 ? 'bg-orange-dark' : 'bg-green-dark'} transition-all ease-in-out px-4 py-3 w-48 md:ml-28 mx-auto mt-5 text-lg font-semibold text-white rounded-3xl`}>Order Now</button>
        </div>
      </div>
      <div className="absolute md:top-[650px] sm:top-[700px] top-[800px] w-full flex justify-center items-center flex-col">
        <h2 className="text-4xl font-bold mb-12">Popular Categories</h2>
        <div className="w-full grid grid-cols-4 justify-items-center gap-y-8 gap-x-8 px-4">
          {categories.categories.map(category => <PopularCategories category={category} />)}
        </div>
        <h2 className="text-4xl font-bold my-12">Popular Dishes</h2>
      </div>
    </div>
  )
}

export async function getStaticProps() {

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

  const categoryResponse = await axios.get("https://shopnext-backend.herokuapp.com/category");
  const popularProductsResponse = await axios.get("https://shopnext-backend.herokuapp.com/products/popular",
    {
      data: {
        productCount: 20
      }
    });

  return {
    props: {
      homepageData,
      categories: categoryResponse.data,
      popularProducts: popularProductsResponse.data
    }
  }
}

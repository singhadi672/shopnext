import axios from "axios"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function ProductByCategory({ categoryProducts }) {

    const router = useRouter()
    if (router.isFallback) {
        return <h1>Hang Tight..... Creating Page</h1>
    }

    function starRating(rating) {
        let stars = []
        for (let i = 0; i < rating; i++) {
            stars.push(i)
        }

        return stars
    }

    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
            <div className="fixed w-full h-60 bg-slate-900 flex justify-center">
                <div className="w-2/3 flex flex-col justify-center items-center text-white">
                    <p className="font-bold text-3xl">Here Are Some Famous Dishes From {router.query.category} Plate</p>
                    <p className="px-8 text-center my-8">{categoryProducts.category[0].description}</p>
                </div>
                <div className="w-1/3 h-60 relative before:content-[''] before:absolute before:top-0 before:w-full before:h-full before:bg-slate-900 before:bg-gradient-to-r before:from-slate-900 before:opacity-70 before:to-slate-700 before:via-slate-800 before:z-20">
                    <img src={categoryProducts.category[0].image} alt="" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="mt-60 bg-white w-full h-full z-10 grid grid-cols-4 gap-y-8 gap-x-8 px-4 py-12">
                {categoryProducts.products.map(product =>
                    <div className="relative w-full h-full bg-slate-200 rounded-lg p-4 flex flex-col justify-between items-center">
                        <img src={product.image} alt="" className="w-full h-60 object-cover" />
                        <p className="text-lg font-semibold">{product.name}</p>
                        <div className="w-full flex justify-between items-center">
                            <p>₹{product.price}</p>
                            <div className="text-amber-400">
                                {starRating(product.rating).map(item => <FontAwesomeIcon icon={faStar} size="sm" key={item} />)}
                            </div>
                            <div className={`absolute w-4 h-4 bg-white top-8 right-8 border-2 rounded before:content-[""] before:w-2 before:h-2 before:absolute before:top-0.5 before:left-0.5 before:rounded-full ${product.type === 'veg' ? 'border-green-600 before:bg-green-600' : "border-red-600 before:bg-red-600"}`}></div>
                        </div>
                        <p className="text-sm my-4 text-center text-slate-600">{product.description}</p>
                        <button className={`bg-green-dark text-white px-4 py-2 rounded-lg disabled:bg-gray-400`} disabled={!product.available}>{product.available ? "Order Now" : "Not Available"}</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { category: 'Indian' }
            }
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {

    const { params } = context
    const response = await axios.get("https://shopnext-backend.herokuapp.com/category/type", {
        data: {
            category: params.category
        }
    })

    return {
        props: {
            categoryProducts: response.data
        }
    }
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function PopularDishes({ product }) {

    function starRating(rating) {
        let stars = []
        for (let i = 0; i < rating; i++) {
            stars.push(i)
        }

        return stars
    }
    return (
        <div className="relative flex flex-col justify-start items-center w-full h-full bg-slate-200 rounded-lg p-4 cursor-pointer">
            <img src={product.image} alt="" className="w-full h-60 object-cover rounded-lg" />
            <p className="text-orange-dark font-bold text-lg my-4 text-center">{product.name}</p>
            <div className="flex justify-between items-center w-full">
                <p className="text-slate-500">{product.category}</p>
                <p className="font-bold text-green-dark text-xl">₹ {product.price}</p>
                <div className="text-amber-400">
                    {starRating(product.rating).map(item => <FontAwesomeIcon icon={faStar} size="sm" key={item}/>)}
                </div>
            </div>
            <div className={`absolute w-4 h-4 bg-white top-8 right-8 border-2 rounded before:content-[""] before:w-2 before:h-2 before:absolute before:top-0.5 before:left-0.5 before:rounded-full ${product.type === 'veg' ? 'border-green-600 before:bg-green-600' : "border-red-600 before:bg-red-600"}`}></div>
            <p className="text-sm my-4 text-center text-slate-600">{product.description}</p>
        </div>
    )
}

// available: true
// category: "Thai"
// description: "Although not as flashy as pad thai, this classic stir-fried glass noodle dish has been around for just as long."
// image: "https://woonheng.com/wp-content/uploads/2021/01/Pad-Woon-Sen-scaled.jpg"
// name: "Pad Woon Sen (Stir-fried Glass Noodles)"
// price: "330"
// rating: 5
// type: "veg"
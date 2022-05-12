export default function PopularCategories({ category }) {
    return (
        <div className="relative bg-slate-100 rounded-2xl overflow-hidden w-full h-full flex flex-col justify-start items-center p-8 group cursor-pointer">
            <img src={category.image} alt="" className="w-full h-60 object-cover" />
            <p className="my-4 text-lg font-bold">{category.name} Cuisine</p>
            <div className="absolute bg-slate-600 w-full h-full -top-full -left-full group-hover:animate-translate-square">
            </div>
            <p className="absolute backdrop-blur top-0 left-0 w-full h-full justify-center items-center px-4 rounded-2xl text-white group-hover:flex transition-all ease-in-out hidden text-center group-hover:animate-scale-homepage">{category.description}</p>
            <button className="bg-orange-dark z-10 text-white px-4 py-2 rounded-2xl">Explore Now!</button>
        </div>
    )
}
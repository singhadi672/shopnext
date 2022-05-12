import FoodLoop1 from './foodLoop1.svg';
import FoodLoop2 from './foodLoop2.svg';
import FoodLoop3 from './foodLoop3.svg';
import FoodLoop4 from './foodLoop4.svg';
import FoodLoop5 from './foodLoop5.svg';
import FoodLoop6 from './foodLoop6.svg';
import FoodLoop7 from './foodLoop7.svg';
import FoodLoop8 from './foodLoop8.svg';

export default function FoodLoops({color}){
    return(
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
    )
}
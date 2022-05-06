import Food1 from './food1.svg'
import Food2 from './food2.svg'

export default function HomepageAnimation({ color }) {
    return color === 0 ? <Food1 className="md:scale-75 scale-50" /> : <Food2 className="md:scale-75 scale-50"/>
}
import '../assets/css/objetlist.css'
import cv1 from '../assets/image/cv1.png'
import cv2 from '../assets/image/cv2.png'
import cv3 from '../assets/image/cv3.png'


let objetsList = [
    { name: "CV_1", description: "description 1", price: "4,99€", image: cv1 },
    { name: "CV_2", description: "description 2", price: "4,99€", image: cv2 },
    { name: "CV_3", description: "description 3", price: "4,99€", image: cv3 },
]

export default function objetsListfun() {
    return (
        <ul>
            {objetsList.map(({ name, description, price, image }) => (
                <ul>
                    <li>{name}</li>
                    <li>{description}</li>
                    <img className="pictureCss" src={image} />
                    <li>{price}</li>
                </ul>
            ))}
        </ul>
    )
}

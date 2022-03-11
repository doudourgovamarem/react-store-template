let objetsList = [
    { name: "CV_1", description: "description 1", price: "4,99€", image: '' },
    { name: "CV_2", description: "description 2", price: "4,99€", image: '' },
    { name: "CV_3", description: "description 3", price: "4,99€", image: '' },
]

export default function objetsListfun(){
    return (
        <ul>
        {objetsList.map(({name, description, price, image})=> (
            <li>{name + description + price + image }</li>
        ))}
        </ul>
    )
}


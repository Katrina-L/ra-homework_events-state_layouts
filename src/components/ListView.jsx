export default function ListView({items}) {
    return (
        <ul className="list-view">
            {items.map( (item, index) => {
                return (
                    <li key={index} className="shop-item">
                        <img className="item-img" src={item.img} /> 
                        <div className="item-name">{item.name}</div>
                        <div className="item-color">{item.color}</div>
                        <div className="item-price">${item.price}</div>
                        <button className="item-addBtn">add to cart</button>     
                    </li>
                )
            } )}
        </ul>
    )
}
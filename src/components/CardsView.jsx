export default function CardsView( {cards} ) {
    return (
        <ul className="cards-view">
            {cards.map( (card, index) => {
                return (
                    <li key={index} 
                        className="shop-card" 
                        style={{
                            backgroundImage: `url(${card.img})`,
                            backgroundSize: 'cover'
                        }}>
                            <div className="card-name">{card.name}</div>
                            <div className="card-color">{card.color}</div>
                            <div className="card-price">
                                ${card.price}
                                <button className="card-addBtn">add to cart</button>
                            </div>
                    </li>
                )
            })}
        </ul>         
    )
} 
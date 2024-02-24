export default function Card (props) {
    return (
        <div className="Card">
            <a className="status">{props.status}</a>
            <img className="Photo" src={'/media/img/tienda/' + props.Photo} />
            <div>
                <img className="star" src="media/img/tienda/Star 1.png" />
                <span>{props.rating}</span> 
                <span className="Location">{props.reviewCount}•</span>
                <span>{props.country}</span>
            </div>            
            <p>{props.description}</p>
            <p><strong>From {props.price}</strong> / person</p>
        </div>
    )
}
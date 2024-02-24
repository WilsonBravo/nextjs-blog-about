export default function Json (props) {
    return (
        <div>
            <img src="/media/img/tienda/image 12.png" alt="Photo" />
            <p>{props.first_name}</p>
            <p>{props.last_name}</p>
            <p>{props.email}</p>
            <p>{props.gender}</p>
            <p>{props.ip_address}</p>
        </div>
    )
}
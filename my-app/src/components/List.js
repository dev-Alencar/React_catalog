export default function List(props) {
    return (
        <li>
            <a
                target="_blank"
                rel="noreferrer"
                href={props.url}>
                <img src={props.img} alt={props.alt} />
            </a>
        </li>
    )
}